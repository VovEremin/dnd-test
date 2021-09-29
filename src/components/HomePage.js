import { Backdrop, Button, Grid, Box } from '@material-ui/core';
import { useState } from 'react'
import ErrorPage from './ErrorPage';
import UploadPage from './UploadPage';
import errors from '../data/errors.json'
import UploadedPage from './UploadedPage';

export default function HomePage () {

  const [error, setError] = useState(false);
  const [files, setFiles] = useState([])

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) setError(false);
  }
  const handleCloseError = () => {
    setError(false);
  }
  const handleCleanDashboard = () => {
    setFiles([]);
  }
  console.log(files)
  return <>
      <Box width="100%" height="100vh">
      <Grid
        width='100%'
        height='100%'
        container
        justifyContent='center'
        alignItems='center'
      >
        {files.length < 2 || files.length > 5
          ? <UploadPage setError={setError} setFiles={setFiles}/>
          : <UploadedPage files={files}/>
        }
      </Grid>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={error}
        onClick={onBackdropClick}
        >
        <ErrorPage
          text={errors.loadingFilesLimit}
          handleCloseError={handleCloseError}
          />
      </Backdrop>
    {(2 <= files.length && files.length <= 5) && <Button style={{ position: 'absolute', top: 20, right: 20 }} onClick={handleCleanDashboard}>Clean dashboard</Button>}
  </>
}