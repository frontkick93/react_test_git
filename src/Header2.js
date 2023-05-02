import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const Header2 = () => {
    return(
        <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'ea15a162-9222-4638-a694-a83e3356feda',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ea15a162-9222-4638-a694-a83e3356feda&groupId=718e8c59-8c60-4fb3-99fe-de6af69c6a45&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvODMwMTM4Y2MtYTgyOS00MDQxLTkyNmUtZGVhNTA1NDlkNjhiLyIsImlhdCI6MTY3NjM0NDQxMCwibmJmIjoxNjc2MzQ0NDEwLCJleHAiOjE2NzYzNDk1MzUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFteFM5b0xGQjFPd1FZZFBUNDJGeExTcjdjQXg3NWhxcXcxQkV6YUZqbm5kbWZnTitsV2NkdjlDNERXcU9FREtRIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjQ0OGQ5M2NlLWQxYjctNDVhYS04NDJlLWQ5MzNkN2VjZDdmYyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoibGl1IiwiZ2l2ZW5fbmFtZSI6InppaHVpIiwiaXBhZGRyIjoiMTI4LjEwNi4yNTEuMTI4IiwibmFtZSI6InppaHVpIiwib2lkIjoiM2ZiZjI2NzItYjAxOS00ZmNiLTg5MzctZjIyZTMyMzk3MzMyIiwicHVpZCI6IjEwMDMyMDAwNUIyQTdCREUiLCJyaCI6IjAuQVZNQXpEZ0JneW1vUVVDU2J0NmxCVW5XaXdrQUFBQUFBQUFBd0FBQUFBQUFBQUJUQUpRLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YXNldC5SZWFkLkFsbCBHYXRld2F5LlJlYWQuQWxsIFJlcG9ydC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZC5BbGwiLCJzdWIiOiI2SWEzRDU5alpCY201OVo4dFo5dmF0bzBVNmNLVjQ1TGtMVkFtRy11d1NjIiwidGlkIjoiODMwMTM4Y2MtYTgyOS00MDQxLTkyNmUtZGVhNTA1NDlkNjhiIiwidW5pcXVlX25hbWUiOiJsaXUuemlodWlAdGlvbmdzZW5nLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImxpdS56aWh1aUB0aW9uZ3Nlbmcub25taWNyb3NvZnQuY29tIiwidXRpIjoiaTRmamdQMFUzRWFoVGQ3ODd6c1BBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiMjkyMzJjZGYtOTMyMy00MmZkLWFkZTItMWQwOTdhZjNlNGRlIiwiZjAyM2ZkODEtYTYzNy00YjU2LTk1ZmQtNzkxYWMwMjI2MDMzIiwiZjI4YTFmNTAtZjZlNy00NTcxLTgxOGItNmExMmYyYWY2YjZjIiwiZjJlZjk5MmMtM2FmYi00NmI5LWI3Y2YtYTEyNmVlNzRjNDUxIiwiMTU4YzA0N2EtYzkwNy00NTU2LWI3ZWYtNDQ2NTUxYTZiNWY3IiwiNjkwOTEyNDYtMjBlOC00YTU2LWFhNGQtMDY2MDc1YjJhN2E4IiwiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYTllYTg5OTYtMTIyZi00Yzc0LTk1MjAtOGVkY2QxOTI4MjZjIiwiNzI5ODI3ZTMtOWMxNC00OWY3LWJiMWItOTYwOGYxNTZiYmI4IiwiZmU5MzBiZTctNWU2Mi00N2RiLTkxYWYtOThjM2E0OWEzOGIxIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuLVVTIn0.S6bkMkL21SPGwHhsILx30mT-YF3N1Y7-bWhPd747hVxsLhV5cRS95CACJd8nxm7aQ4mP-ihLGoOuEUPbAvw9yNW21TrqZAB7SOtToSb6yo5uvh0_oMT6h6ZXSr9se7N1GYW2TqM-GgxgW847k3FfxLZYAh_Wty9dwc7RtqQPRX7IvpSoksNmvYXHJGNdnLKjPSxXv8bkLPCxYX516vgeAu-sn374Wz8zHCTq1t_9iYZGOzik57OcXqK7n7QjxKTI5XzGQIM1PUCxCkneb_ECD3b8Vx_UNAoJeuU-jCF2QlhCLsSwUbX2UsnjrEQBkuFMO0ae5B8DTBM9PpRnFdmaMg',
            tokenType: models.TokenType.Aad,
            settings: {
              pages:{
              background:false
              },
              panes: {
                filters: {
                  expanded: true,
                  visible: false,
                  background: models.BackgroundType.Transparent
                }
              }
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"embed-c"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    );
};

export default Header2;