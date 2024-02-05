import { Box, Button, IconButton } from "@mui/material";

const Hero = () => {
  return (
    <div>
      {/* Main Box */}
      <Box display="flex" justifyContent="space-between" paddingY={2} paddingX={10}>
        {/* Left Box */}
        <Box width="60%" paddingRight={1}>
          <h1>Hello, I'm Evangeline!</h1>
          <p>
            I'm a Mechatronics Engineering student, a music lover and a
            tinkerer.
          </p>
          <Button>
            <p>Contact Me</p>
          </Button>
          <Button>
            <p>Check my LinkedIn</p>
          </Button>
        </Box>

        {/* Right Box */}
        <Box width="60%" paddingLeft={1}>
          <p>Imagefjkdalf;jdksla;fjdksal;fjfjdksal;fjdkalfjdkalfddjfkld;ajfkdl
            dfjdkal;fjdksal;fjdksal;fjdksl;ajfkdlsa;jfkdlsa;afhjdkal</p>
          <h2>Image</h2>
          <h2>Image</h2>

        </Box>
      </Box>
    </div>
  );
};

export default Hero;
