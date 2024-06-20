
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Grid,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
  convertButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "gold",
    color: "black",
    "&:hover": {
      backgroundColor: "black",
      color: "gold",
    },
  },
}));

const CryptoConverter = () => {
  const classes = useStyles();
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.frankfurter.app/currencies"
        );
        const data = response.data;
        const entries = Object.entries(data);
        setCurrencies(entries.map((entry) => entry[0]));
        setFromCurrency(entries[0][0]); // Set default 'from' currency
        setToCurrency(entries[1][0]); // Set default 'to' currency
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    try {
      if (fromCurrency === toCurrency) {
        alert("Please select two different currencies");
        return;
      }

      const response = await axios.get(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const rate = Object.values(response.data.rates)[0];
      const convertedValue = (amount * rate).toFixed(2);
      setConvertedAmount(convertedValue);
    } catch (error) {
      console.error("Error converting:", error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Currency Converter
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                variant="outlined"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="From Currency"
                variant="outlined"
                value={fromCurrency}
                onChange={handleFromCurrencyChange}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="To Currency"
                variant="outlined"
                value={toCurrency}
                onChange={handleToCurrencyChange}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            className={classes.convertButton}
            variant="contained"
            onClick={handleConvert}
          >
            Convert
          </Button>
        </form>
        {convertedAmount !== null && (
          <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default CryptoConverter;
