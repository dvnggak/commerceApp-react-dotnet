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
    <Card sx={{ minWidth: 275 }} className="grid grid-cols-1 gap-4">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {product.category}
        </Typography>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <div className="flex gap-24">
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            $ {product.price}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            Stock : {product.stock}
          </Typography>
        </div>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
      <CardActions className="flex justify-end place-items-end">
        <Button size="small" onClick={handleCheckout}>
          Checkout now!
        </Button>
      </CardActions>
    </Card>
  );
}
