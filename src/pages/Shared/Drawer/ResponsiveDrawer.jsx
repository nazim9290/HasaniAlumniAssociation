import Grid from '@mui/material/Grid2'
import MembersList from '../../Members/AlumniStudent/AlumniStudent';
import { Container, Box } from '@mui/material';
import MultipleSelectCheckmarks from '../../../Component/SelectComponent/MultipleSelectCheckmarks';
import SearchBar from '../../../Component/SearchBar/SearchBar';
import { useState } from 'react';

export default function ResponsiveDrawer() {
  const [selectedValue, setSelectedValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <Container >
      <Grid container>
        <Grid size={{ xs: 6, sm: 6, md: 6 }} >
          <MultipleSelectCheckmarks selectedValue={selectedValue} setSelectedValue={setSelectedValue} ></MultipleSelectCheckmarks>
        </Grid>
        <Grid size={{ xs: 6, sm: 6, md: 6 }}
          direction="row"
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <SearchBar setSearchValue={setSearchValue}></SearchBar>

        </Grid>


      </Grid>
      <MembersList selectedValue={selectedValue} searchValue={[searchValue]}></MembersList>
    </Container>
  )
}
