import "./widgetLg.css";

const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

const WidgetLg = () => {
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr>
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                alt="user Img"
                className="widgetLgImg"
              />
              <span className="widgetLgName">Mohamed Ali</span>
            </td>
            <td className="widgetLgDate">19 Jun 2023</td>
            <td className="widgetLgAmount">$222.19</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
