import { Button, Grid, Paper } from "@material-ui/core";
import { Box, styled } from "@material-ui/system";

const Input = styled('input')({
  display: 'none',
});

export default function UploadPage({ setError, setFiles }) {
  
  const handleUpload = (e) => {
    if (!e.target.files) return
    if (e.target.files.length < 2 || e.target.files.length > 5) {
      setError(true)
    }
    let files = e.target.files
    setFiles([...files])
  }
  return (
    <>
      <Paper elevation={3}>
        <Box width={800} height={300}>
          <Grid
            width='100%'
            height='100%'
            container
            justifyContent='center'
            alignItems='center'
          >
            <Paper elevation={18}>
              <label htmlFor="contained-button-file">
                <Input
                  multiple
                  onChange={handleUpload}
                  accept='image/jpeg,image/png,application/pdf'
                  id="contained-button-file"
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload files
                </Button>
              </label>
            </Paper>
          </Grid>
        </Box>
      </Paper >
    </>
  )
}
