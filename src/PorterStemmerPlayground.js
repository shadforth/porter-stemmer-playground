import "./PorterStemmerPlayground.css";
import PorterStemmer from "natural/lib/natural/stemmers/porter_stemmer";
import {
  Button,
  ButtonGroup,
  Chip,
  Divider,
  FormControl,
  Grid,
  Sheet,
  Stack,
  Textarea,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useState } from "react";

const PorterStemmerPlayground = () => {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");
  const TOOLTIP_TEXT =
    "This is a sandbox for testing tokenisation using the Porter Stemmer algorithm.";

  const onPressTokenise = () => {
    const resultArr = PorterStemmer.tokenizeAndStem(textInput).map(
      (value) => `'${value}'`,
    );
    const sortedSet = [...new Set(resultArr)].sort();
    const sortedSetStr = sortedSet.join(" ");
    setResult(sortedSetStr);
  };

  const onPressReset = () => {
    setTextInput("");
    setResult("");
  };

  return (
    <div className="app">
      <Stack className="app-stack" spacing={2}>
        <Typography level="h2">
          Porter stemmer{" "}
          <Chip color="danger" variant="solid" size="sm">
            Experimental
          </Chip>
        </Typography>
        <FormControl>
          <Textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type text here..."
            minRows={3}
          />
        </FormControl>
        <ButtonGroup
          buttonFlex={1}
          aria-label="flex button group"
          sx={{
            maxWidth: "100%",
          }}
        >
          <Button variant="solid" color="primary" onClick={onPressTokenise}>
            Tokenise
          </Button>
          <Button color="neutral" onClick={onPressReset}>
            Reset
          </Button>
        </ButtonGroup>

        <Divider />
        <Sheet variant="soft" sx={{ p: 4, minHeight: "28px" }}>
          {result}
        </Sheet>
        <Grid container direction="row" justifyContent="space-between">
          <Grid>
            <Typography level="body-xs">
              Token count:&nbsp;
              <strong>{result ? result.split(" ").length : 0}</strong>
            </Typography>
          </Grid>
          <Grid>
            <Tooltip title={TOOLTIP_TEXT}>
              <Chip
                className="info-chip"
                color="primary"
                variant="outlined"
                size="sm"
              >
                What is this?
              </Chip>
            </Tooltip>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default PorterStemmerPlayground;
