import { Button, Grid, SvgIcon } from "@mui/material";
import { useEffect, useState } from "react";
import { CoinList } from "./components/CoinList"
import { MyList } from "./components/MyList";
import { getCoins, getListLocal } from "./utils";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './styles/global.scss';

const Coins = () => {
  const [isLoading, setisLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [list, setList] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [open, setOpenModal] = useState(false);
  const [all, setAll] = useState(false);


  const fecthData = async (params = null) => {
    setisLoading(true);
    (params && params?.length) ? setAll(true) : setAll(false);
    const {data, isLoading } = await getCoins(params);
    setCoins(data);
    setisLoading(isLoading);
  }

  useEffect(() => {
    const decoded = getListLocal();
    setList(decoded);
    fecthData();
  }, [])

  return (
    <>
      <div className="px-5">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div className="d-flex">
              <h2 className="m-0"> My lists </h2>
              <div>
                { showBtn && 
                  <Button variant="contained"
                    startIcon={<AddCircleIcon />} 
                    onClick={() => setOpenModal(true)} > 
                    List
                  </Button> 
                }
                { all && !showBtn && 
                  <Button variant="outlined"
                    startIcon={<HomeIcon color="primary" />} 
                    onClick={() => fecthData()} > 
                    All Coins
                  </Button> 
                }
              </div>
            </div>
            <MyList list={list} fecthData={fecthData} />
          </Grid>
          
          <Grid item xs={10}>
            <CoinList 
              data={coins} 
              isLoading={isLoading}
              setShowBtn={setShowBtn} 
              handleModal={setOpenModal} 
              setList={setList}
              open={open} />
         
          </Grid>
        </Grid>
      </div>
    </>
  )
}

const HomeIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default Coins