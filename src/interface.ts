import {ChatCompletionRequestMessage} from "./openai/index";
import {AxiosProxyConfig} from "axios";

export interface IConfig {
  api?: string;
  proxy?: AxiosProxyConfig | undefined;
  openai_api_key: string;
  model: string;
  chatTriggerRule: string;
  disableGroupMessage: boolean;
  temperature: number;
  blockWords: string[];
  chatgptBlockWords: string[];
  chatPrivateTriggerKeyword: string;
}
export interface User {
  username: string,
  chatMessage: Array<ChatCompletionRequestMessage>,
}