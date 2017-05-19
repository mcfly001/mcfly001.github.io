const http=require('http');
const port=5000;
const hostname='127.0.0.1'
const obj={
  name:"张三",
  age:12,
  sale:'man'
}

const server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain; charset=utf-8');
  res.end(obj.name);
})

server.listen(port,hostname,()=>{
  console.log(`服务器正在运行在 http://${hostname}:${port}/`);
})