import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../interfaces/IProduct";
import { useNavigate } from "react-router";

export default function BasicCard(product: IProduct) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  return (
    <Card sx={{ minWidth: 275, color:"primary" }} className="grid grid-cols-1">
      <img src="https://picsum.photos/1000/500" alt={product.name} width="full" height="full" />
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {product.category}
        </Typography>
        <Typography variant="h5" component="div" sx={({ fontWeight: "bold"})}>
          {product.name}
        </Typography>
        <div className="flex my-1 mb-2 justify-between">
          <Typography sx={{ mb: 1, color: "green" }}>
            $ {product.price}
          </Typography>
          {product.stock > 0 ? 
          <Typography sx={{ mb: 1 }}>
            Stock : {product.stock}
          </Typography> :
          
          <Typography sx={{ mb: 1, color: "red" }}>
            Stock : {product.stock}
          </Typography>}
        </div>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
      <CardActions className="flex justify-center place-items-center">
        <Button size="small" onClick={handleCheckout}>
          Checkout now!
        </Button>
      </CardActions>
    </Card>
  );
}
