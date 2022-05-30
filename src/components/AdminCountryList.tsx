import React from "react";
import Header from "./Header";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { useStoreState, useStoreActions } from "../store/store";
import { useNavigate } from "react-router-dom";

const AdminCountryList: React.FC = () => {
  const navigate = useNavigate();
  const { countryList: countryInfo, isEdit } = useStoreState(
    ({ AppStore: { countryList, isEdit } }) => ({ countryList, isEdit })
  );
  const { removeCountry, editCountry } = useStoreActions(
    ({ AppStore: { removeCountry, editCountry } }) => ({
      removeCountry,
      editCountry,
    })
  );
  const handleRemove = (id: any) => {
    removeCountry(id);
  };

  const handleEdit = (country: any) => {
    if (isEdit == true) {
      navigate("/countryinfo");
    }
    editCountry(country);
  };

  return (
    <>
      <Header />
      <Container
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}
      >
        {countryInfo?.map((country, index) => {
          return (
            <Card
              sx={{
                maxWidth: 355,
                height: 220,
                marginBottom: 2,
                marginRight: 5,
                textTransform: "capitalize",
              }}
              key={index}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Country: {country.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Population : {country.population}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Area : {country.area}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Review : {country.review}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Denesity : {country.denesity}
                </Typography>
                <CardActions>
                  <Button size="small" onClick={() => handleRemove(country.id)}>
                    Remove
                  </Button>
                  <Button size="small" onClick={() => handleEdit(country)}>
                    Edit
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default AdminCountryList;
