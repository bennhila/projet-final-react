import React from "react";
import "../style/produit.css";
import { connect } from "react-redux";

import { increment, decrement } from "../actions/action";
const Produit = (props) => {
  return (
    <div className="textligne">
      <div className="flexCard">
        {props.listProduit.map((el) => (
          <div className="divBorder">
            <div>
              <img className="img" src={el.img} alt="" />
            </div>
            <div className="divTitle">
              <h3>{el.title} </h3>
            </div>
            <div className="divPrice">{el.price}</div>
            <div className="flex">
              <button className="btnCard" onClick={props.plusBtn(el.id)}>
                +
              </button>
              <p>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  v{" "}
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                {el.counter}
              </p>
              <button className="btnCard" onClick={props.minusBtn(el.id)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    listProduit: state.produitListReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    plusBtn: () => dispatch(increment()),
    minusBtn: () => dispatch(decrement()),
  };
};
//   return{
//     counter:state.counterReducer
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Produit);
