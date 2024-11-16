import pizza from "../../assets/images/pizza.jpg";
// Other imports...
import { Box } from "@mui/material";
import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

function App() {
  const [actionToBePerformed, setActionToBePerformed] = useState(false);

  const handleHeaderClick = () => {
    setActionToBePerformed(true);
  };

  const clearActionToBePerformed = () => {
    setActionToBePerformed(false);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundImage: `url(${pizza})`,
      backgroundSize: 'cover',
    }}>
      
      

      <Header
        title="We love Pizza"
        version={0 + 1}
        handleHeaderClick={handleHeaderClick}
      />
      <Main
        actionToBePerformed={actionToBePerformed}
        clearActionToBePerformed={clearActionToBePerformed}
      />
      
      <Footer />
    </Box>
  );
}

export default App;
