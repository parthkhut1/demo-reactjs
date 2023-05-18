import logo from './logo.svg';
import './App.css';
import DropDown from './componets/DropDown';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const yearData = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
const makeData = [
  {
    name: 'Acura',
    modal: ['ILX', 'MDX', 'MDX-SH-AWD', 'MDX-Sport-Hybrid', 'NSX', 'RDX-2WD', 'RDX-AWD'],
    engine: ['2.4L DI DOHC I-VTEC 4CYL']
  },
  {
    name: 'Alfa Romeo',
    modal: ['4C Spider', 'Giulia', 'Giulia Quadrifoglio', 'Giulia Sport', 'Giulia TI', 'Stelvio', 'Stelvio Quadrifoglio'],
    engine: ['1.7L DI TURBO DOHC 4CYL']
  },
  {
    name: 'Audi',
    modal: ['A3 Premium', 'A3 Premium Plus', 'A3 Premium Plus Quattro', 'A3 Premium Quattro', 'A3 Prestige', 'A3 Premium Quattro'],
    engine: ['2.0L FI TURBO DOHC 4CYL']
  },
  {
    name: 'Autocar',
    modal: ['Xpeditor', 'Xpert', 'Xspotter Off Road', 'Xspotter On Road'],
    engine: ['11.9 NATURAL GAS 6CYL', '11.9 TURBO DIESEL 6CYL', '8.9L MFI TURBO DSL 6CYL']
  },
  {
    name: 'Blue Bird',
    modal: ['All American FE AAC2810-3006', 'All American FE AAC3401-3502', 'All American FE AAC3707-3808', 'All American FE AAC3904-4100'],
    engine: ['6.7L FI TURBO DIESEL 6CYL']
  },
  {
    name: 'BMW',
    modal: ['230i', '230i xDrive', '330i', '330i GT xDrive', '330i xDrive', '340i GT xDrive', '430i'],
    engine: ['2.0L TWIN TURBO DOHC 4CYL']
  }
]


function App() {
  const [data, setData] = useState({
    "year": "",
    "mack": "",
    "engine": "",
    "modal": ""
  })

  const handleChange = (event) => {
    const { name, value } = event?.target;
    if (name === "modal" && makeData?.filter((item) => item?.name === data?.mack)?.[0]?.engine?.length <= 1) {
      setData({
        ...data,
        engine: makeData?.filter((item) => item?.name === data?.mack)?.[0]?.engine?.[0],
        [name]: value
      })
    } else if(name === "year") {
      setData({
        ...data,
        [name]: value,
        modal:"",
        mack:"",
        engine:""
      })
    }else if(name === "mack") {
      setData({
        ...data,
        [name]: value,
        modal:"",
        engine:""
      })
    }else {
      setData({
        ...data,
        [name]: value
      })
    }
  }
  const submitVehicle = () => {
    console.log({ YMME: data });
  }
  return (
    <Container>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <DropDown value={data?.year} handleChange={handleChange} name={"year"} label={"1 | Year"} option={yearData} />
        <DropDown value={data?.mack} handleChange={handleChange} name={"mack"} label={"2 | Make"} option={makeData?.map((item) => item?.name)} disabled={data?.year ? false : true} />
        <DropDown value={data?.modal} handleChange={handleChange} name={"modal"} label={"3 | Model"} option={makeData?.filter((item) => item?.name === data?.mack)?.[0]?.modal} disabled={data?.mack ? false : true} />
        <DropDown value={data?.engine} handleChange={handleChange} name={"engine"} label={"4 | Engine"} option={makeData?.filter((item) => item?.name === data?.mack)?.[0]?.engine} disabled={data?.modal && makeData?.filter((item) => item?.name === data?.mack)?.[0]?.engine?.length > 1 ? false : true} />
      </Box>
      <Button style={{ background: "blue", color: "white", padding: "10px", width: "120px", margin: "16px" }} onClick={submitVehicle}>Submit</Button>
    </Container>
  );
}

export default App;
