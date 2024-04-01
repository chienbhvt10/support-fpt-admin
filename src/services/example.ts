import { EXAMPLE_API_URL } from "@/constants/apis";
import { CommonResponse } from "@/types/common.type";
import HttpClient from "@/utils/axios-config";

class ExampleAPI {
  public exampleFunction() {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.get<null, CommonResponse>(url);
  }

  public exampleFunction2(params: any) {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.post<null, CommonResponse>(url, params);
  }

  public exampleFunction3(params: any) {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.put<null, CommonResponse>(url, params);
  }

  public exampleFunction4(params: any) {
    const url = EXAMPLE_API_URL.API_URL;
    return HttpClient.delete<null, CommonResponse>(url, params);
  }
}

const Example = new ExampleAPI();
export default Example;
