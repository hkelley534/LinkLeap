import Typography from "@mui/material/Typography";

export default function Title() {
  return(
    <Typography 
    variant="h1" 
    color="#FFF" 
    sx={{ 
      fontWeight: 500, 
      mt: {xs: 5, md: 10},
      p: 5, 
      userSelect: 'none'
    }}>
      LinkLeap
    </Typography>
  )
}