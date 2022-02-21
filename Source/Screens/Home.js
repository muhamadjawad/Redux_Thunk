import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchProducts} from '../Redux/Actions/apiActions';

const Home = props => {
  useEffect(() => {
    props.callApi();
    // dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    console.log('apiData====>', props.apiData);
  });

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state', state);

  return {
    apiData: state.todoApi,
  };
};
const mapDispatchToProps = dispatch => ({
  callApi: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
