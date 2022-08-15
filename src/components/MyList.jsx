import PropTypes from "prop-types";
import { Grid, ListItem, ListItemButton } from "@mui/material"
import { getListLocal } from "../utils";

export const MyList = ({list, fecthData}) => {

  const uploadList = (index) => {
    const decoded = getListLocal();
    const ids = (decoded[index]) ? decoded[index].coins.toString() : '';
    fecthData(ids);
  }

  return (
    <>
      { (list && list.length ) ? 
        <ul className="p-0">
          {list.map((item, index) => (
            <ListItem key={index} component="div" disablePadding>
              <ListItemButton onClick={() => uploadList(index)}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                  <Grid item xs={6}>
                    <strong>Name</strong>
                  </Grid>
                  <Grid item xs={6}>
                    <strong># Coins</strong>
                  </Grid>
                  <Grid item xs={6}>
                    <span>{item.name}</span>
                  </Grid>
                  <Grid item xs={6}>
                    {item.coins.length}
                  </Grid>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </ul>
      : (
        <p>Total Lists <strong>0</strong> </p>
      )
    }
    </>
  )
}

MyList.propTypes = {
  list: PropTypes.array.isRequired,
  fecthData: PropTypes.func,
};

MyList.defaultProps = {
  list: [],
};

