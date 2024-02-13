// // import React from 'react';
// // import { connect } from 'react-redux';
// // import addToCart from '../services/Actions/actions.js';
// // import { Home } from '../components/Home.js';

// // const mapStateToProps = state => ({
// //   // Your mapStateToProps logic here
// // });

// // const mapDispatchToProps = dispatch => ({
// //  // addToCartHandler: data => dispatch(addToCart(data)) // Corrected typo here
// //     addToCartHandler:data =>dispatch(addToCart(data))
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(Home);


// import React from 'react';
// import { connect } from 'react-redux';
// import { addToCart } from '../services/Actions/actions.js'; // Corrected import statement
// import { Home } from '../components/Home.js';

// const mapStateToProps = state => ({
//   // Your mapStateToProps logic here
// });

// // const mapDispatchToProps = dispatch => ({
// //   addToCartHandler: data => dispatch(addToCart(data)) // Corrected function name here
// // });

// const mapDispatchToProps = dispatch => ({
//     addToCartHandler: data => dispatch(addToCart(data))
//   });
  

// export default connect(mapStateToProps, mapDispatchToProps)(Home);




  
import { connect } from 'react-redux';
// import { addToCart } from '../services/Actions/actions.js'
import { Home } from '../components/Home.js';
import { UseDispatch } from 'react-redux';
import addToCart from '../services/Actions/actions.js';

const mapStateToProps = state => ({
  data:state

});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
