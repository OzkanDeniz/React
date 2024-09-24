import React from "react";

const counterReducer = (state = { sayac: 0, text: "" }, { type, payload1 }) => {
  switch (type) {
    case "ARTTIR":
      return { sayac: state.sayac + 1, text: payload1 };
  }
};

export default counterReducer;
