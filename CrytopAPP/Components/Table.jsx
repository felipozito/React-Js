import React from "react";

const Table = (props) => {
      const x = [1, 2, 3, 4, 5, 6];
      return (
            <table>
                  <thead>
                        <tr>
                              <th>Item</th>
                              <th>Coin</th>
                              <th>Price</th>
                              <th>1Hr</th>
                              <th>24Hr</th>
                              <th>Fecha</th>
                        </tr>
                  </thead>
                  <tbody>
                        {props.data.map((item, index) => {
                              return (
                                    <tr key={index + 1}>
                                          <td>{index + 1}</td>
                                          <td>{item.name}</td>
                                          <td>{item.current_price}</td>
                                          <td>{item.price_change_percentage_1h_in_currency}</td>
                                          <td>{item.price_change_percentage_24h}</td>
                                          <td>{item.ath_date}</td>
                                    </tr>
                              );
                        })}
                  </tbody>
            </table>
      );
};

export default Table;
