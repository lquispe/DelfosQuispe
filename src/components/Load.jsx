import { css } from "@emotion/react";

import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const Load =()=>{



return(
    <>
<div >
                <BounceLoader
                  css={override}
                  size={75}
                  color={"#EE1F25"}
                  loading={true}
                />
              </div>
              <div className="loader-container mt-3"> <span className="loading-text">Loading...</span></div>
              </>
)
}
export default Load;