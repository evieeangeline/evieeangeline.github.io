import { Box, Icon, IconButton } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const iconColor = "#E8E8E8";

const Topbar = () => {
  return (
    <div>
      <Box display="flex" justifyContent="right" p={2}>
        {/* Icons */}
        <Box display="flex" justifyContent="right">
          {/* Github */}
          <IconButton>
            <GitHubIcon />
          </IconButton>
          {/* Linked In */}
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          {/* Email */}
          <IconButton>
            <EmailIcon />
          </IconButton>
          {/* Space */}
          <Box pl={2} />
        </Box>
      </Box>
    </div>
  );
};

export default Topbar;
