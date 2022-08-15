import PropTypes from "prop-types";
import { DataGrid } from '@mui/x-data-grid';
import { useRef, useState } from "react";
import { columns } from "../dataGrid/Columns";
import { Modal } from "./Modal";
import { getListLocal } from '../utils';

export const CoinList = ({data, setShowBtn, handleModal, open, isLoading, setList}) => {
  const [IDsList, setIDsList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [selectionModel, setSelectionModel] = useState([]);
  const refTable = useRef({})

  
  /**
   * Function for save IDs encoded Base64 in localstorage 
   * key {coinIDS} 
   */
  const saveLocalStorage = (values) => {
    const decoded = getListLocal();
    //Agregar item a my lista
    const newList = (decoded.length) ? [...decoded, {...values, coins: IDsList}] : [{...values, coins: IDsList}];
    setList(newList);
    const encoded = btoa(JSON.stringify(newList));
    localStorage.setItem('myCoinsList', encoded);
    handleModal(false);
    setSelectionModel([]);
    setShowBtn(false)
  }
  
  const handleSelection = (selection) => {
    setSelectionModel(selection);
    if (selection.length) {
      setIDsList(selection);
      setShowBtn(true)
      //console.log('--> hay para save');
    } else {
      setShowBtn(false)
    }
  }
  
  return data ? (
    <>
      <div style={{ height: 670, width: '100%', margin: 'auto' }}>
        <DataGrid
          ref={refTable}
          loading={isLoading}
          rows={data}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[10, 20, 50]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          selectionModel={selectionModel}
          pagination
          checkboxSelection 
          onSelectionModelChange={handleSelection}
        />
      </div>

      <Modal open={open} onSubmit={saveLocalStorage} handleClose={handleModal} />

    </>
  ) : null;
}

CoinList.propTypes = {
  data: PropTypes.array, 
  setShowBtn: PropTypes.func, 
  handleModal: PropTypes.func, 
  setList: PropTypes.func,
  open: PropTypes.bool.isRequired, 
  isLoading: PropTypes.bool,
};

CoinList.defaultProps = {
  open: false,
  isLoading: true,
};
