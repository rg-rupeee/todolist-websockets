# WebSocket

The WebSocket protocol is a TCP-based network protocol that specifies how data is transferred between networks
It is a computer communications protocol, providing full-duplex communication channels over a single TCP connection 

WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 

When speed is critical, WebSocket comes in. Any application that requires a high-speed, low-latency connection should use WebSocket. Some examples of when WebSocket is used are:
- live chats on support websites
- news tickers
- stock tickers
- messaging applications
- real-time games
- social networking sites to enable live engagement and immediate chat between users