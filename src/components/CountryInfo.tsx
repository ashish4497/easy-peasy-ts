import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useStoreActions, useStoreState } from "../store/store";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
  TextField,
} from "@mui/material";

interface countryInfo {
  name: string;
  population: string | number;
  area: string | number;
  review: string;
  denesity: string | number;
  id: string | number;
}

export default function CountryInfo() {
  const [countryInfo, setCountryInfo] = useState<countryInfo>({
    name: "",
    population: "",
    area: "",
    review: "",
    denesity: "",
    id: Math.floor(Math.random() * 100),
  });
  const { addNewCountry, updateEdit } = useStoreActions(
    ({ AppStore: { addNewCountry, updateEdit } }) => ({
      addNewCountry,
      updateEdit,
    })
  );
  const { isEdit, updateCountry } = useStoreState(
    ({ AppStore: { isEdit, updateCountry } }) => ({ isEdit, updateCountry })
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit === true) {
      setCountryInfo(updateCountry);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setCountryInfo({
      ...countryInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    addNewCountry(countryInfo);
    setCountryInfo({
      name: "",
      population: "",
      area: "",
      review: "",
      denesity: "",
      id: "",
    });
    navigate("/adminCountryList");
  };

  const handleUpdate = () => {
    updateEdit(countryInfo);
    setCountryInfo({
      name: "",
      population: "",
      area: "",
      review: "",
      denesity: "",
      id: "",
    });
    navigate("/adminCountryList");
  };
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 270, marginTop: 10 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 18,
                textAlign: "center",
                textTransfome: "capitalize",
              }}
              color="text.secondary"
            >
              Enter Country Detail
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3, width: "40ch", display: "flex" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                label="Country Name"
                variant="outlined"
                onChange={handleChange}
                name="name"
                value={countryInfo.name}
              />
              <TextField
                label="Population"
                variant="outlined"
                onChange={handleChange}
                name="population"
                value={countryInfo.population}
              />
              <TextField
                label="Area"
                variant="outlined"
                onChange={handleChange}
                name="area"
                value={countryInfo.area}
              />
              <TextField
                label="Review"
                variant="outlined"
                onChange={handleChange}
                name="review"
                value={countryInfo.review}
              />
              <TextField
                label="Denesity"
                variant="outlined"
                onChange={handleChange}
                name="denesity"
                value={countryInfo.denesity}
              />
              {isEdit !== true ? (
                <Button
                  style={{
                    height: 50,
                    width: 405,
                    display: "flex",
                    marginTop: 14,
                  }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  style={{
                    height: 50,
                    width: 405,
                    display: "flex",
                    marginTop: 14,
                  }}
                  variant="contained"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              )}
            </Box>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
