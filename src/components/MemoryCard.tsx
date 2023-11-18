import { Link } from "react-router-dom"
import { Memory } from "../types/Memory"
import { Card, CardContent, Typography } from "@mui/material"

function MemoryCard({memory: {id, name, timestamp, description}}: {memory: Memory}){
  return(
    <Link to={`/memories/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {timestamp}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default MemoryCard