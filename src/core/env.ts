export interface Env {
    BOT_TOKEN: string;
  }
  export default {
    async fetch(
      request: Request,
      env: Env,
      ctx: ExecutionContext
    ): Promise<Response> {
      console.log(env.BOT_TOKEN)
    }
  }
  