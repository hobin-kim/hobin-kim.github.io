---
layout: home
title: Home
---

I am currently a master’s student at KAIST, conducting research in the [Network security and privacy](https://netsp.kaist.ac.kr) group under the supervision of Professor Min Suk Kang. My research focuses on **how individuals can take proactive steps to manage their personal information and mitigate potential security threats when interacting with technology**. I am currently <ins>seeking a Ph.D. position</ins> and welcome any interested parties to reach out to me for collaboration.

<!-- I am currently pursuing a M.S. at KAIST, under the guidance of Professor Min Suk Kang in the [Network security and privacy](https://netsp.kaist.ac.kr) group. My research primarily focuses on the security of blockchain and distributed systems, with a growing interest in machine learning security. I completed my B.S. in Computer Science at Yonsei University, and I anticipate finishing my M.S. degree at KAIST in 2025. -->

## Research Experiences
Understanding User Privacy Perceptions about Common Features of Video Conferencing Platforms (Submitted at CHI'25)<br />

여러 비디오 컨퍼런싱 플랫폼에서 user interaction을 유발하는 공통된 기능들에 대한 사용자들의 privacy perception에 대해 조사하였다. 이때, 기존의 연구들과 달리 비디오 컨퍼런싱이 활용되는 다양한 context를 고려하여, context에 따른 인식의 변화 및 가장 민감한 context에 대해 조사하였다. 이때 contextual integrity framework를 이용하여서 질문을 만들었다. 총 769명의 응답을 quantitative analysis를 활용하여 분석하였고, I identify emerging privacy concerns about the pinning and spotlighting features, as users often feel great discomfort when their video is pinned or spotlighted by others in specific contexts. These insights provide a deeper understanding of privacy in video conferencing, highlighting the need for more refined privacy controls and a proactive approach to feature development.

This is my first journey of usable security! I am so excited to end-user 관점에서 security and privacy 문제를 푸는 것. 앞으로의 나의 여정을 기대해줘! 

Attacking PoW based DoS defense mechanism of Tor Onion Service (Submitted at USENIX Security'25)<br />
[In August 2023, Tor onion service adopted Proof-of-work (PoW) based Denial-of-service (DoS) defense mechanism.](https://gitlab.torproject.org/tpo/core/torspec/-/blob/main/proposals/327-pow-over-intro.txt) Clients need to solve PoW puzzle with the level of difficulty suggested by the service to access to the service. If the service is crowded, then the difficulty value increases and clients with high computation powers can access the service. The paper mainly shows that this difficulty can be inflated and make the system looks busy; thus, benign clients become hard to access.<br />
My main contribution in this research work is that tor client 코드를 수정하여서, a tor client가 continuosly send introduce messages to the victim onion service. Also I test the attack in Tor Shadow and real-world environments

Klaytn Bug Report<br /> 
o [Klaytn suffered from consensus delay on Apr 3, 2020](https://medium.com/klaytn/analysis-on-consensus-delay-at-cypress-block-24-002-380-7db8cb366dc1) and I analyzed the main cause of the bug in the code level. The details were shared with the Klaytn developers.
o All blockchain systems은 서로 공유되는 message를 tracking하는 것에 어려움이 있습니다. Klaytn을 위한 Consensus message의 propagation을 모니터링할 수 있는 testbest를 구축하였고, 이를 github에 opensource화 하였습니다.


## Projects
Fast Packet Transmission<br />
This project는 약 1년 넘게 지속되었지만, 현재는 중단된 상태입니다. 초반에는 SCION infrastructure를 활용하여서, blockchain을 타겟으로 하는 네트워크 공격으로부터 안전하고, 메시지 전파 속도를 빠르고 효율적으로 할 수 있는 시스템을 설계하고자 하였습니다. 
이 과정에서 DPDK를 활용하여서, fast packet transmission을 위한 코드를 구현하였습니다. f-stack 코드를 수정하여서 TCP packet이 cut-through routing을 할 수 있도록 수정하였습니다.
비록, 이 프로젝트는 중단되었지만, 이 과정에서 한 문제에 관해 약 1년의 시간동안 고민하였고, multicast의 역사, ISP간의 이해관계, fast blockchain message propagation system 등 네트워크에 관해 많은 이해를 할 수 있었습니다. 

Paran-girin<br />
This is an application for helping communication between parents and childern through paran-girin (blue giraffe). To breifly introduce, paran-girin asks a question to the children, and they answer the qeustion. I, as a front-end app developer, mainly implemented communication related features. 그것들은 girrafe gif를 main 화면에 불러와서 tts를 활용하여 아이에게 질문을 하는 것, 그리고 아이의 응답을 카메라를 통해 녹화하고, 이를 저장하는 것. 그리고, 캘린더 UI도 제작하였는데, 이때 아이의 응답이 날짜별로 표시되게 하였음. 이때, 우리가 사용했던 framework는 flutter였다. 
이후, 완성된 앱은 Google play store와 App store에 올라가서 사용자들에게 실제로 사용되었고, 아이와의 상호작용에 도움이 된다는 긍정적인 피드백을 받았다. 

Mad Camp<br />
이것은 카이스트에서 4주간 진행되는 코딩 캠프이다. 매주 다른 앱을 기획하여 설계하는 과정이며, 내가 제작했던 앱중 "AR treasure hunter"라는 앱은 Best project award를 받았다. 이 앱은 포켓몬고처럼 AR을 활용하여 개발자들이 현실 세계에 숨겨둔 보물을 찾는 게임이다. 
내가 mainly하게 했던 일은, Unity를 활용하여서 AR환경을 연동하여서 실제 위치에 보물을 숨기고, 특정 위치에서 보물을 발견할 수 있는 기능을 만들었다. 
이를 통해 android stuio를 통한 app development를 처음으로 경험하였다. 

Minions Robot<br />
카이스트 산업디자인학과 ID220의 수업 과제 중 일부였다. 조이스틱으로만 조절할 수 있는 RC카들은 너무 식상하다고 느꼈고, 그런 기존의 틀에서 벗어나 hand motion으로 RC카를 control할 수 있으면 좀 더 재밌는 interaction이 될 것이라고 생각했다. 장갑에 flexible thin film pressure sensor를 부착하여서, 구부림 동작을 인식하여 사람들이 손 모양으로 RC카를 조작할 수 있도록 하였다. RC카 또한 미니언즈 모양으로 만들어서 좀 더 인간에게 친근감을 주도록 하였고, proposing 기능을 추가하여 손가락으로 미니 하트를 만들면 머리에서 꽃이 나오도록 설계하였다. 

Object Detector<br />
Kasit biorobotics lab에서 학부시절 한 달 동안 개별연구를 하였다. 이때, computer vision을 통해서 real sense 카메라로부터 들어오는 정보에서 square cuboid robot을 detect하였다. 또한, 해당 object의 physical location을 계산하였다. 이후, robot arm을 control하여서 해당 object를 들어올리는 코드를 짰다. 

<!-- ## Publications
Frontrunning attacks against fair ordering blockchain systems (under review)

[Partitioning Ethereum without Eclipsing It][gethlighting]  (NDSS'23)<br />
*Hwanjo Heo, Seungwon Woo, **Taeung Yoon**, Min Suk Kang, Seungwon Shin*

## Projects
[P2PDL: A decentralized peer-to-peer machine learning platform](https://github.com/yoontaeung/p2pdl)<br /> *Near AI Hackathon [2nd place](https://x.com/nearhorizon/status/1833458059399561627) (USD 4,000 Bounty), 2024*<br />
P2PDL is an ongoing open-source project aimed at decentralized peer-to-peer machine learning. It allows clients to train a model collaboratively in a permissionless setting, without relying on a central server [(Demo)](https://www.youtube.com/watch?v=aWOipnBZndM).


[A dentralized sequencing layer for Layer-2 blockchain](https://github.com/yoontaeung/fg-beta)<br />*2025*<br />
This project introduced a decentralized sequencing layer designed to enhance the throughput and security of blockchain Layer-2 systems. Independent transaction sequences from untrusted sequencers are merged without depending on consensus mechanisms like Byzantine Fault Tolerance. By avoiding the overhead, we significantly improved transaction throughput while maintaining robust security guarantees.

### Other
I have written several posts (in Korean) and have been published on [Xangle](https://xangle.io/), a leading blockchain research platform. You can check the posts below:
<details>
  <summary>Posts</summary>
  <ul>
    <li><a href="https://xangle.io/insight/research/63ebca7c15364cdc8c6ac7ca">What is blockchain</a></li>
    <li><a href="https://xangle.io/research/detail/1139">About Bitcoin</a></li>
    <li><a href="https://xangle.io/research/detail/1254">Proof of Work</a></li>
    <li><a href="https://xangle.io/research/detail/1269">Blockchain Trilemma</a></li>
    <li><a href="https://xangle.io/research/detail/1558">A Smart Contract</a></li>
  </ul>
</details>

[gethlighting]: https://www.ndss-symposium.org/wp-content/uploads/2023/02/ndss2023_f465_paper.pdf -->
