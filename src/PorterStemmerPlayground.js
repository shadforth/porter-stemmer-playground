import "./PorterStemmerPlayground.css";
import PorterStemmer from "natural/lib/natural/stemmers/porter_stemmer";
import {
  Button,
  ButtonGroup,
  Chip,
  Divider,
  FormControl,
  Sheet,
  Stack,
  Textarea,
  Typography,
} from "@mui/joy";
import { useState } from "react";

const PorterStemmerPlayground = () => {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");

  const onPressTokenise = () => {
    const resultArr = PorterStemmer.tokenizeAndStem(textInput).map(
      (value) => `'${value}'`
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
          <Chip color="danger" size="sm" variant="outlined">
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
        <Typography level="body-xs">
          Token count: <strong>{result ? result.split(" ").length : 0}</strong>
        </Typography>
      </Stack>
    </div>
  );
};

export default PorterStemmerPlayground;
