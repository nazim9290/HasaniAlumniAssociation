
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar({ setSearchValue }) {
  return (

    <Paper
      component="form"
      sx={{ p: '2px 4px', width: '50%'}} >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search name or dakhil exam year"
        onChange={(e) => setSearchValue(e.target.value)}      
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}