import type { FormEvent, ReactElement } from "react"
import AppBar from "../components/AppBar"
import AppBody from "../components/AppBody"
import { Box, Button, Grid, TextField } from "@mui/material"
import supabase from "../utils/supabaseClient"
import { useSnackbar } from "notistack"

export default function SignIn(): ReactElement {
  const { enqueueSnackbar } = useSnackbar()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    if (!email || !password) {
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string
    })

    if (error) {
      enqueueSnackbar(error.message)
      return
    }

    enqueueSnackbar(`登陆成功${data.session.access_token}`)
  }

  return (
    <>
      <AppBar title="登陆" />
      <AppBody>
        <Box className="flex flex-col items-center">
          <Box component="form" noValidate onSubmit={void handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="邮箱" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="密码" type="password" id="password" />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              登 陆
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button size="small">还没有账户?去注册</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AppBody>
    </>
  )
}
