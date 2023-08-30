import type { FormEvent, ReactElement } from "react"
import AppBar from "../components/AppBar"
import AppBody from "../components/AppBody"
import { Box, Button, Grid, TextField } from "@mui/material"
import supabase from "../utils/supabaseClient"
import { useSnackbar } from "notistack"

export default function SignUp(): ReactElement {
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    const nickname = formData.get("nickname")
    if (!email || !password || !nickname) {
      return
    }

    const { error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
      options: {
        data: {
          nickname: nickname as string
        }
      }
    })

    if (error) {
      enqueueSnackbar(error.message)
      return
    }

    enqueueSnackbar(`注册成功`)
  }

  return (
    <>
      <AppBar title="注册" />
      <AppBody>
        <Box className="flex flex-col items-center">
          <Box component="form" noValidate onSubmit={void handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="邮箱" name="email" autoComplete="email" autoFocus />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="密码" type="password" id="password" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="nickname" required fullWidth id="nickname" label="昵称" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              注 册
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button size="small">已经有账户了? 去登陆</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AppBody>
    </>
  )
}
