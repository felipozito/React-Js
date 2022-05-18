import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../Components/Table";

function App() {
      const [datos, setDatos] = useState();
      const getData = async () => {
            const res = await axios.get(
                  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
            );
            console.log(res.data);
            setDatos(res.data);
      };
      useEffect(() => {
            getData();
      }, []);

      return (
            <div className="App">
                  <h1 className="App-header">CRYTOP APP</h1>
                  <Table data={datos} />
            </div>
      );
}

export default App;
