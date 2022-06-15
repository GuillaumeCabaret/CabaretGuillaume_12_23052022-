import * as dataFetch from "./dataFetch"
import * as dataMock from "./dataMock"

export default process.env.REACT_APP_MOCKACTIVE === "true" ? dataMock : dataFetch;