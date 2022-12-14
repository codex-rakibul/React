import "./App.css";
import Data from "./data.json";

import Card from "./component/1.Card/Card";
import List from "./component/2.UniqueList/List";
import Nmap from "./component/3.NestedMapping/Nmap";
import ClassCom from "./component/4.ClassComponent/ClassCom";
import ReactIcon from "./component/5.ReactIcon/ReactIcon";
import State from "./component/6.State/State";
import Checking from "./component/7.Conditional_Rendering/Checking";
import Even_Handler from "./component/8.Even_Handler/Even_Handler";
import HOOKS_USESTATE from "./component/9.HOOKS_USESTATE/Index";
import HOOKS_USESTATE2 from "./component/9.HOOKS_USESTATE/Index2";
import Form from "./component/10.FORM/Form";
import USE_STATE_WITH_OBJECT from "./component/11.USE_STATE_WITH_OBJECT/index";
import Child_Parent from "./component/12.Child_Parent/Index";
import Signup from "./component/13.Formik/Signup";
import Home from "./component/14.State_Lifting/Home";
import Toggle from "./component/15.1_Toggle/Toggle";
import FAQS from "./component/15.2_FAQ/FAQS";
import UseEffect from "./component/16.Use_Effect/UseEffect";
import FetchData from "./component/17.Fetching_data_with_useEffect/FetchData";
import CustomFetchData from "./component/18.Custom_Hook/FetchData";
import Dynamic from "./component/19.Dynamic_Style/Dynamic";
import PropsTypes from "./component/20.Props_Type/PropsTypes";
import Life_Cycle from "./component/21.Life_Cycle/Life_Cycle";

function App() {
  return (
    <div>
      <h1 className="heading">1 React</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Data.map((items, index) => (
          <Card allData={items} key={index} />
        ))}
      </div>
      <h1 className="heading">2 Unique ID</h1>
      <List />
      <h1 className="heading">3 Nested Mapping</h1>
      <Nmap />
      <h1 className="heading">4 Class Component</h1>
      <ClassCom />
      <h1 className="heading">5 Using React Icons</h1>
      <ReactIcon />
      <h1 className="heading">6 STATE</h1>
      <State count="0" />
      <h1 className="heading">7 Conditional Component</h1>
      <Checking />
      <h1 className="heading">8 Even Handeling</h1>
      <Even_Handler />
      <h1 className="heading">9 HOOKS_USESTATE</h1>
      <HOOKS_USESTATE />
      <HOOKS_USESTATE2 />
      <h1 className="heading">10 Collect Form Data</h1>
      <Form />
      <h1 className="heading">11 USE_STATE_WITH_OBJECT</h1>
      <USE_STATE_WITH_OBJECT />
      <h1 className="heading">12 Child_Parent</h1>
      <Child_Parent />
      <h1 className="heading">13 Signup (formik & yup)</h1>
      <Signup />
      <h1 className="heading">14 State_Lifting</h1>
      <Home/>
      <h1 className="heading">15.1 Toggle</h1>
      <Toggle/>
      <h1 className="heading">15.2 FAQ for Website</h1>
      <FAQS/>
      <h1 className="heading">16 UseEffect</h1>
      <UseEffect/>
      <h1 className="heading">17 Fetching Data With useEffect</h1>
      <FetchData/>
      <h1 className="heading">18 Custom Hook</h1>
      <CustomFetchData/>
      <h1 className="heading">19 Dynamic Styling</h1>
      <Dynamic/>
      <h1 className="heading">20 Props Types</h1>
      <PropsTypes/>
      <h1 className="heading">21 Life Cycle</h1>
      <Life_Cycle/>
    </div>
  );
}

export default App;
