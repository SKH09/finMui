import "./App.css";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
import {
  blue,
  brown,
  deepPurple,
  green,
  orange,
  yellow,
} from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Avatar from "@mui/material/Avatar";
function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 4, bgcolor: "#f8f5f0", color: "black" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              paddingBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Overview
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"header header header "
            "pots pots budgets"
            "trans trans budgets"
            "trans trans budgets"
            "trans trans bills"
            "trans trans bills"`,
          }}
        >
          {/* Top 3 Cards */}
          <Box
            sx={{
              paddingBottom: "50px",
              gridArea: "header",
              color: "black",
            }}
          >
            <Box
              sx={{
                paddingLeft: "5px",
                textAlign: "left",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "14px",
              }}
            >
              <Box
                sx={{ bgcolor: "#fff", borderRadius: "10px", padding: "20px" }}
              >
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                  Current Balance
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  $4,836.00
                </Typography>
              </Box>
              <Box
                sx={{ bgcolor: "#fff", borderRadius: "10px", padding: "20px" }}
              >
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                  Income
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  $3,814.25
                </Typography>
              </Box>
              <Box
                sx={{ bgcolor: "#fff", borderRadius: "10px", padding: "20px" }}
              >
                <Typography variant="body1" sx={{ paddingBottom: "10px" }}>
                  Expenses
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  $1,700.50
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Bottom 4 Cards */}

          {/* 1. Pots */}
          <Box
            sx={{
              gridArea: "pots",
              borderRadius: "20px",
              bgcolor: "#fff",
            }}
          >
            {/* pots-info */}
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <Typography>Pots</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>See Details</Typography>
                <ArrowRightIcon />
              </Box>
            </Box>
            {/* Total Saved */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "#f8f5f0",
                  marginBottom: "40px",
                  padding: "20px 40px",
                }}
              >
                <Box>
                  {" "}
                  <AttachMoneyIcon
                    sx={{ fontSize: "40px", color: brown[900] }}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>Total Saved</Typography>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    $850
                  </Typography>
                </Box>
              </Box>
              {/* 4 Pots */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  justifyItems: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    borderLeft: "5px solid #277c77",
                    marginRight: "5px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "10px" }}>Savings</Typography>
                  <Typography sx={{ paddingLeft: "10px" }}>$159</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                    borderLeft: "5px solid #81c8d7",
                    marginRight: "5px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "10px" }}>Gift</Typography>
                  <Typography sx={{ paddingLeft: "10px" }}>$40</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                    borderLeft: "5px solid #625f70",
                    marginTop: "10px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "10px", marginRight: "20px" }}>
                    Concert Ticket
                  </Typography>
                  <Typography sx={{ paddingLeft: "10px" }}>$159</Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                    borderLeft: "5px solid #f1cdab",
                    marginTop: "10px",
                  }}
                >
                  <Typography sx={{ paddingLeft: "10px" }}>
                    New Laptop
                  </Typography>
                  <Typography sx={{ paddingLeft: "10px" }}>$10</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* 2. Budgets */}
          <Box
            sx={{
              gridArea: "budgets",
              borderRadius: "20px",
              bgcolor: "#fff",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <Typography>Budgets</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>See Details</Typography>
                <ArrowRightIcon />
              </Box>
            </Box>
            <Box
              sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {/* image */}
              <Box>
                <img
                  src="/assets/Screenshot_From_2024-10-19_16-08-35-removebg-preview.png"
                  alt=""
                />
              </Box>
              {/* 4 budgets */}
              <Box>
                <Box sx={{ textAlign: "left" }}>
                  <Typography>Entertainment</Typography>
                  <Typography>$50.00</Typography>
                </Box>
                <Box sx={{ textAlign: "left" }}>
                  <Typography>Bills</Typography>
                  <Typography>$750.00</Typography>
                </Box>
                <Box sx={{ textAlign: "left" }}>
                  <Typography>Dining Cut</Typography>
                  <Typography>$75.00</Typography>
                </Box>
                <Box sx={{ textAlign: "left" }}>
                  <Typography>Personal Care</Typography>
                  <Typography>$100.00</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* 3. Transactions */}
          <Box
            sx={{
              gridArea: "trans",
              bgcolor: "#fff",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <Typography>Transactions</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>See Details</Typography>
                <ArrowRightIcon />
              </Box>
            </Box>
            {/* Profile -1 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              {/* matter on the right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>E</Avatar>
                <Typography sx={{paddingLeft:'10px'}}>Emma Richardson</Typography>
              </Box>
              {/* matter on the right */}
              <Box>
                <Typography sx={{ textAlign: "right" }}>+$75.50</Typography>
                <Typography>19 Aug 2024</Typography>
              </Box>
            </Box>
            {/* Profile -2 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              {/* matter on the right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: blue[500] }}>ST</Avatar>
                <Typography sx={{paddingLeft:'10px'}}>Emma Richardson</Typography>
              </Box>
              {/* matter on the right */}
              <Box>
                <Typography sx={{ textAlign: "right" }}>+$75.50</Typography>
                <Typography>19 Aug 2024</Typography>
              </Box>
            </Box>
            {/* Profile -3 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              {/* matter on the right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: green[500] }}>DC</Avatar>

                <Typography sx={{paddingLeft:'10px'}}>Daniel Carter</Typography>
              </Box>
              {/* matter on the right */}
              <Box>
                <Typography sx={{ textAlign: "right" }}>+$75.50</Typography>
                <Typography>19 Aug 2024</Typography>
              </Box>
            </Box>
            {/* Profile -4 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              {/* matter on the right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: yellow[500], color: "black" }}>
                  SP
                </Avatar>
                <Typography sx={{paddingLeft:'10px'}}>Sun Park</Typography>
              </Box>
              {/* matter on the right */}
              <Box>
                <Typography sx={{ textAlign: "right" }}>+$75.50</Typography>
                <Typography>19 Aug 2024</Typography>
              </Box>
            </Box>
            {/* Profile -5 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* matter on the right */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ bgcolor: orange[500], color: "black" }}>
                  UH
                </Avatar>
                <Typography sx={{paddingLeft:'10px'}}>Urban Services Hub</Typography>
              </Box>
              {/* matter on the right */}
              <Box>
                <Typography sx={{ textAlign: "right" }}>+$75.50</Typography>
                <Typography>19 Aug 2024</Typography>
              </Box>
            </Box>
          </Box>

          {/* 4. Recurring Bills */}
          <Box
            sx={{
              gridArea: "bills",
              bgcolor: "#fff",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ padding: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Recurring Bills</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>See Details</Typography>
                  <ArrowRightIcon />
                </Box>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 10px",
                    bgcolor: "#f8f5f0",
                    borderLeft: "4px solid #277c77",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>Paying Bills</Typography>
                  <Typography>$75.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 10px",
                    bgcolor: "#f8f5f0",
                    borderLeft: "4px solid #f1cdab",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>Paying Bills</Typography>
                  <Typography>$75.00</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 10px",
                    bgcolor: "#f8f5f0",
                    borderLeft: "4px solid #81c8d7",
                    borderRadius: "10px",
                  }}
                >
                  <Typography>Paying Bills</Typography>
                  <Typography>$75.00</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
