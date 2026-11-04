# Python-Based Network Traffic Monitoring Tool

## Objective
The Python-Based Network Traffic Monitoring Tool was developed to capture, monitor, and analyze network packets in real time. The project uses Python and the Scapy library to inspect network traffic and extract important information such as source and destination IP addresses, port numbers, protocols, and packet details.

The primary objective was to identify potentially suspicious network activities by monitoring predefined ports, processing captured packets, and maintaining timestamped logs. This project provided practical experience in network traffic analysis, packet inspection, and basic threat detection techniques.

### Skills Learned
Understanding of network traffic monitoring and packet sniffing.
Practical experience with TCP/IP, UDP, IP addresses, and port numbers.
Understanding of packet capture and packet processing using Scapy.
Identifying potentially suspicious network activities through predefined port monitoring.
Extracting and analyzing source IP, destination IP, ports, and protocols.
Implementing Python-based logging mechanisms for network activity.
Understanding basic network security monitoring and threat detection.
Developing Python scripts for cybersecurity applications.

### Tools Used

Python: Programming language used to develop the network monitoring tool.
Scapy: Used for capturing, sniffing, and processing network packets.
Socket: Used for network communication and interaction with network protocols.
Psutil: Used to access system and network-related information.
Command Prompt / Terminal: Used to install dependencies and execute the Python script.

## Steps
Use the following steps to document your implementation. Add your actual screenshots under the corresponding descriptions.

Step 1: Installing Scapy

Installed the Scapy Python library, which provides packet capture, sniffing, and network packet analysis capabilities.

Ref 1: Installation of Scapy

<img width="677" height="257" alt="image" src="https://github.com/user-attachments/assets/4fbe3ddd-2df8-4d4c-9a96-2bc548f00a86" />

Step 2: Importing Required Modules

Imported the necessary Python libraries, including Scapy, Socket, and Psutil, to support packet capture and network monitoring.

Ref 2: Importing Required Modules

<img width="501" height="104" alt="image" src="https://github.com/user-attachments/assets/e69dc0c2-e2fe-4d83-a82c-fd182f29e31c" />

Step 3: Setting Up Logging

Configured a logging mechanism to record captured network activities with timestamps for future investigation and analysis.

Ref 3: Logging Configuration

<img width="501" height="104" alt="image" src="https://github.com/user-attachments/assets/bdf485ae-2f2d-4873-ac52-a9d563d44dcb" />

Step 4: Defining Suspicious Ports

Created a dictionary containing predefined ports, including SSH (22), Telnet (23), and DNS (53), to flag potentially suspicious network activity.

Ref 4: Suspicious Port Identification

<img width="1345" height="36" alt="image" src="https://github.com/user-attachments/assets/a95c3be8-7ac0-4907-8ece-89af91195f54" />

Step 5: Implementing Packet Processing

Developed the process_packet() function to extract packet information, including source and destination IP addresses, port numbers, and protocols, and check for suspicious port activity.

Ref 5: Packet Processing Function

<img width="1384" height="548" alt="image" src="https://github.com/user-attachments/assets/772d2706-9050-4060-995c-f404cb76b3fe" />

Step 6: Starting Network Monitoring

Used Scapy's sniff() function to capture packets from the network interface and pass each captured packet to the processing function for analysis.

Ref 6: Real-Time Network Monitoring

<img width="614" height="77" alt="image" src="https://github.com/user-attachments/assets/5360af42-bb37-45bd-ad58-2b09475e8e52" />

Step 7: Executing the Tool and Observing Output

Executed the Python script with administrator privileges and observed the captured network packet information and monitoring output.

Ref 7: Network Monitoring Output

<img width="880" height="891" alt="image" src="https://github.com/user-attachments/assets/94d8f4f4-435c-4edd-83f7-47513e8d1cad" />

