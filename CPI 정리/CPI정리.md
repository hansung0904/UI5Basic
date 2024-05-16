# Pools
## Integration Process
***Integration Process는 메시지를 처리하기 위한 실행 가능한 교차 시스템 프로세스이다.***<br>

통합 프로세스에서 모든 프로세스 단계는 다음과 같다. <br>
프로세스 제어와 관련된 파라미터를 정의한다.
![](/CPI%20정리/imgCPI/IntegrationProcess.png)

## Local Integration Process
### Local Integration Process
*Integration Process에서 Local Integration Process를 사용해서 작업을 단순화 시킬 수 있다. <br>*
*Local Integration Process를 사용해서 Main Integration Process를 더 작은 단위로 나눌 수 있다.*

### Process Call
*Process Call Step 단계를 사용해서 main Integration Process에서 Local Integration Process를 호출할 수 있다.*
![](/CPI%20정리/imgCPI/LocalIntegrationProcess2.png)<br>

### Looping Process Call
*Lopping Process Call 단계를 통해서 정의된 xPath 조건에 따라 로컬 통합 프로세스를 N번 호출할 수 있다.*
![](/CPI%20정리/imgCPI/LocalIntegrationProecess1.png)

## Exception SubProcess
### Exception Subprocess
*Integration Process 또는 Local Integration Process에서 발생한 예외를 발견하고 추가 처리를 수행하려면 Exception SubProcess를 사용할 수 있다.*

```text
• 메세지 종료 이벤트를 사용해서 Exception을 Fault Message로 포장해서 Payload Sender에게 돌려 줄 수 있다.

• Error End Event를 사용해서 기본 예외 처리기에 예외를 적용할 수 있다.

• Message Processing Log는 사용자가 예외를 발견하고 추가 처리를 수행하더라도 Error상태가 된다.
```

## Message Transformers : Mapping
### Message Mapping
*이 Process 단계는 수신자 시스템이 송신자 시스템과 다른 메시지 형식을 받아들일 때 Message Mapping을 만드는데 사용된다. <br> Message Mapping은 입력 메시지 구조와 출력 메시지 구조의 필요한 형식을 매핑하는 logic을 정의하며 graphical mapping이라고도 불린다. <br> Editor로는 Eclipse 뿐만 아니라 클라우드 플랫몸의 Integration WebUI를 사용할 수 있다.*

### XSLT Mapping
*XLST Mapping은 송신자 메시지의 형식을 수신자 메시지로 변환하는 데 사용된다. <br> XLST Mapping은 altova, xml spy와 같은 xml 편집기에서 생성된 다음 프로젝트에서 가져온다.*

## Message Transformers : Encoder
*이 프로세스 단계는 네트워크를 통해 전송하는 동안 중요한 메시지 내용을 보호하기 위해 인코딩 체계를 사용해서 메시지를 인코딩하는 데 사용된다.* <br>

*Properties 보기의 드롭다운 목록에서 다음 인코딩 체계를 선택할 수 있다.* <br>
1. **Base64 Encode** : base64를 사용해서 메시지 내용을 인코딩할 수 있다.
2. **GZIP Compress** : GNU zip(GZIP)을 사용해서 메시지 내용을 압축할 수 있다.
3. **ZIP Compress** : ZIP을 사용해서 메시지 내용을 압축할 수 있다.
4. **MIMEmultipart encode** : 메시지 내용을 MIME multipart message로 변환할 수 있다. <br>
![](/CPI%20정리/imgCPI/MessageTransformersEncoder.png)

## Message Transformers : Decoder
*이 프로세스 단계는 원본 데이터를 검색하기 위해 네트워크를 통해 수신된 메시지를 Decoding 하는데 사용된다.*<br>

*Properties 보기의 드롭다운 목록에서 다음과 같은 디코딩 체계를 선택할 수 있다.*
1. **Base64 Decode** : base64로 Encoding된 메시지 내용을 Decoding할 수 있다.
2. **GZIP Decomproess** : GNU zip(GZIP)을 사용해서 메시지 내용을 압축 해제할 수 있다.
3. **ZIP Decompress** : ZIP을 사용해서 메시지 내용을 압축 해제할 수 있다.
4. **MIME multipart decoder** : MIME multipart message를 첨부파일이 있는 메시지로 변환할 수 있다. <br>
![](/CPI%20정리/imgCPI/MessageTransformersDecoder.png)

## Message Transformers : Filter
*이 프로세스 단계는 수신 메시지에서 특정 노드를 추출해서 정보를 필터링하는 데 사용된다.* <br>

1. *Properties view에서 Xpath를 입력해서 본문에서 특정 메시지 부분을 추출한다. <br>예를 들어, Xpath 필드에 /ns0:MessageBulk/Message/MessageContent/text()를 입력한다.*

2. *지정된 Node의 값을 반환한다.*

3. *상위 Node 및 하위 Node를 반환한다.* <br>
![](/CPI%20정리/imgCPI/MessageTransformersFilter.png)

## Message Transformers : Content Modifier
*이 프로세스 단계는 수신자에게 메시지를 보내기 전에 메시지의 헤더 또는 바디에 추가 정보를 제공해서 수신 메시지의 내용을 수정하는데 사용된다.*

**Message Header** - 상수, 다른 헤더, XPath, property, external parameter를 사용해서 수식, 로컬 변수 또는 전역변수를 구성해서 헤더를 생성하거나 기존 헤더의 값을 설정하고 메시지에서 삭제할 수 있다. <br> 헤더에 액세스하려면 ```${header.<Header Name>}```을 사용한다.

**Exchange Property Tab** - 헤더와 마찬가지로 사용자는 Properties View에서 Exchange Property 탭을 선택해서 위에서 설명한 대로 다른 값 유형을 가진 속성을 정의할 수도 있다.

***참고: 헤더 값은 외부 시스템 호출 후 손신될 수 있지만 property는 온전한 메시지 실행에 사용할 수 있다.<br>아웃바운드 통신 중에 헤더는 모든 메시지 수신자와 Integration Flow로 전달되는 반면 properties는 Integration Flow 흐름 내에 남아서 수신자에게 전달되지 않는다.***

**Message Body** - Content Modifier의 Body 탭에서 발신 메시지에 예상되는 내용을 지정한다. <br>
Body에 액세스 하려면 ```${in.body}```를 사용한다.
![](/CPI%20정리/imgCPI/ContentModifier.png)

**Example** <br>
![](/CPI%20정리/imgCPI/ContentModifierExample.png)

## Message Transformers : Converter
*CSV/XML/JSON 형식의 input 메시지가 있는 경우 Integration flow의 후속 단계에서 사용하려면 이 메시지를 XML 또는 JSON 또는 CSV 형식으로 변환해야 한다. <br> 이 메시지 변환은 Converter를 사용해서 수행할 수 있다.*

*메시지 변환에는 아래의 Converter들을 사용할 수 있다.* <br>

→ CSV to XML conversion <br>
→ XML to CSV conversion <br>
→ XML to JSON conversion <br> 
→ JSON to XML conversion <br> 
→ XML to EDI conversion <br>
→ EDI to XML conversion <br>

## Converter : CSV to XML
*CSV 형식의 입력 input message가 있는 경우 이 메시지를 XML 형식으로 변환해서 integration flow의 후속 단계에서 사용해야 한다. <br> 이 메시지 변환을 수행하려면 CSV to XML Converter를 사용하면 된다.*

*Properties View에서 아래 표에 주어진 필드에 대한 설명을 기준으로 세부 정보를 입력한다.* <br>

1. *Browse(찾아보기)에서 Message Converter의 기본을 사용되는 XML 스키마 파일의 파일 경로를 선택한다. <br> XMl 파일 스키마 형식은 payload 작성의 기본으로 사용된다. <br> 이 파일은 package source.main.resources에 있어야 한다.*

2. *CSV의 콘텐츠를 배치해야 하는 XML 스키마 파일의 XPath이다.*

3. *변환을 위해 고려해야 하는 CSV 파일의 해당 레코드이다. <br> 이 항목은 CSV의 모든 새 레코드에서 첫 번째 텍스트이다.<br> 참고: 이 값을 지정하지 않으면 모든 레코드가 변환 대상으로 간주된다.*

4. *CSV 파일에 사용되는 필드 구분자* <br>
![](/CPI%20정리/imgCPI/CSVtoXML.png)

## Converter : XML to CSV
*XML 형식의 input message가 있는 경우 이를 CSV 형식으로 변환해서 integeration flow의 후속 단계에서 상요해야 한다. <br> 이  message 변환을 수행하기 위해서는 XML to CSV Converter를 사용할 수 있다.*

*Properties View에서 아래 표에 주어진 필드에 대한 설명을 기준으로 세부 정보를 입력한다.* <br>

*CSV로 변환할 소스 요소의 Xpath 제공* <br>
1. *CSV의 콘텐츠를 배치해야 하는 XML 스키마 파일의 XPath*
2. *CSV 파일의 필드 구분자. <br> 각 요소는 출력 파일의 필드 구분자로 구분된다.*
3. *출력 파일에서 XML의 요소 이름을 원하는 경우 확인란을 클릭한다.* <br>
![](/CPI%20정리/imgCPI/XMLtoCSV.png)

## Converter: XML to JSON
*XML 형식의 입력 메시지가 있는 경우 이를 JSON 형식으로 변환해서 Integeration flow의 후속 단계에서 사용해야 한다. <br> 이 메시지 변환을 수행하기 위해서는 XML to JSON Converter를 사용할 수 있다.*

*Properties View에서 아래 표에 주어진 필드에 대한 설명을 기준으로 세부 정보를 입력한다.*

1. *Converter step의 이름을 입력*
2. *XML 네임스페이스를 JSON 접두사로 매핑한다. 이 매개변수는 " Use Namespace Mapping"을 선택한 경우에만 채워진다. <br> JSON형식의 Namspace/prefix는 문자로 시작해야 하며 0-9,A-zZ를 포함할 수 있다.*
3. *로컬 파트에서 JSON 접두사를 구분하는 JSON 접두사 구분자이다. <br>  Colon(:), Comma(, ), Dot(.Pipe(|), Semicolon(;) 및 space()가 지원된다.<br> 사용된 값은 JSON 접두사 또는 로컬 이름에 사용되어서는 안된다.*
4. *JSON 출력 인코딩을 입력한다. 기본값은 Header 또는 Property이다.*
5. *Streaming: 큰 XML 메시지의 확인란을 클릭한다. 스트리밍은 들어오는 XMl 문서의 모든 요소 또는 특정 요소를 반환할 수 있다.*
6. *XML 문서의 각 개별 태그는 전체 구조에서 태그가 발생하는 위치와 구조에서 발생하는 빈도(복수성)에 관계없이 연속적으로 처리된다. <br> • 루트 요소 태그 없이 JSON 메시지를 작성하려면 이 옵션을 선택한다.*<br>
![](/CPI%20정리/imgCPI/XMLtoJSON.png) <br>

*XML에서 JSON으로의 변환은 다음 규칙을 따른다.* <br>
→ *혼합된 내용을 가진 요소<br>(Example: A>mixed1_value<B>valueB</B>mixed2_value</A>)는 지원되지 않습니다. XML에서 JSON(제이슨)으로 이동하면 잘못된 결과가 나옵니다. {"A":{"B":"valueB",$:"mixed1_valuemixed2_value"}.) <br>*
→ *JSON 문서에 Namespace 선언이 작성되지 않은 경우*<br>
→ *요소와 특성 사이의 탭, 공백 및 new lines는 무시된다.*<br>
→ *Namespace가 있지만 Namespace가 XML-Namspace-to-JSON Prefix 맵에 포함되지 않은 XML 접두가사 없는 요소가 있는 경우 예외가 발생한다. <br> <Axmlns="http://test"/>
-> IllegalStateException Invalid JSON 네임스페이스: http://test.*<br>

## Converter : JSON to XML
*JSON 형식의 입력 메시지가 있는 경우 이 메시지를 XML 형식으로 변환해서 Integeration flow의 후속 단게에서 사용해야 한다. <br> JSON to XML Converter를 사용해서 이 메시지 변환을 수행할 수 있다.*

*Properties view에서 아래 표에 주어진 필드에 대한 설명을 기준으로 세부 정보를 입력한다.*

1. *Converter의 이름을 입력.*
2. *XML Namespace를 JSON 접두사에 매핑하는 중이다. 이 매개변수들은 "Use Namespace Mapping"을 선택한 경우에만 채워진다. <br> JSON은 Namspace/Prefix는 문자로 시작해야 하며 0-9, a-zZ를 포함할 수 있다.*
3. *로컬 파트에서 JSON 접두사를 구분하는 JSON 접두사 구분자이다. <br> Colon(:), Comma(,), Dot(.) Pipe(|), Semicolon(;) 및 space()가 지원된다. <br> 사용된 값은 JSON 접두사 또는 로컬 이름으로 사용해서는 안된다.*

![](/CPI%20정리/imgCPI/JSONtoXML.png)


## Message Transformers : Script
*이 프로세스 단계는 메시지 처리 또는 변환을 위해 Java 또는 Groovy 스크립트를 실행하는데 사용된다.* <br>
*Message 객체의 아래 인터페이스를 사용해서 헤더, Body 및 속성을 추가하거나 수정할 수 있다.*
```java
 • public java.util.Map<java.lang.String,java.lang.Object> getHeaders()
 • public void setHeaders(java.util.Map<java.lang.String,java.lang.Object> exchangeHeaders)
 • public void setHeader(java.lang.String name, java.lang.Object value)
 • public java.lang.Object getBody()
 • public void setBody(java.lang.Object exchangeBody)
 • public java.util.Map<java.lang.String,java.lang.Object> getProperties()
 • public void setProperties(java.util.Map<java.lang.String,java.lang.Object> exchangeProperties)
 • public void setProperty(java.lang.String name, java.lang.Object value)
```

## Message Routing : Splitter
*이 프로세스 단계는 복합 메시지를 일련의 개발 메시지로 분해해서 수신자에게 보내는데 사용된다. <br> IDoc 또는 PKCS#7/CMS Signature-Content와 같은 메시지 유형 또는 메시지를 분할할 방식 <br> Ex) 일반 또는 반복 스플리터에 따라 복합 메시지를 분할한다.*

*Properties View에서 스플리터 유형을 선택한다.*<br>
→ ***IDoc Spillter****는 복합 IDoc 메시지를 복합 IDoc 메시지의 포락선(=일정한 조건을 만족하는, 한 무리의 직선이나 곡선에 접하는 곡선. 예를 들면, 한 정점(定點)에서 직선거리가 같은 직선군의 포락선은 원이다.) 요소와 함께 일련의 개별 IDoc 메시지로 분할하는데 사용된다. <br>  지금처럼 이 단계의 output은 IDoc 어댑터만 있어야한다.* <br>
→ ***PKCS#7/CMS Signature-Content Splitter****는 에이전트가 서명 및 내용이 포함된 PKCS7 Signed Data 메시지를 보낼 때 사용된다. 이 스플리터 유형은 서명 및 내용을 별도의 파일로 나눈다.*<br>
→ ***Genearl Splitter****는 N개의 메시지로 구성된 복합 메시지를 N개의 개별 메시지로 분할하고 각 메시지에는 복합 메시지의 포락선 요소가 포함되어 있다.* <br>
→ ***Iterative Splitter****는 복합 메시지의 포락선 요소를 복사하지 않고 복합 메시지를 일련의 메시지로 분할한다.*<br>
→ ***EDI Splitter****는 인바운드 대량 EDI 메시지를 분할하고 처리 중에 인바운드 메시지를 확인하고 승인하도록 Splitter를 구성할 수 있다.* <br>
![](/CPI%20정리/imgCPI/MessageRoutingSplitter.png)

## Message Routing : Router
*이 프로세스 단계는 런타임 동안 메시지가 receiver 또는 interface로 라우팅 되는 조건을 지정하는데 사용된다. <br> 메시지에 XML Payload가 포함되어 있으면, Xpath가 지원하는 연산자를 사용해서 표현식을 형성한다. <br> 메시지에 XML Payload가 포함되어 있다면 아래표에 표시된 연산자를 사용하여 표현식을 형성한다.*
![](/CPI%20정리/imgCPI/MessageRouter1.png) <br>
![](/CPI%20정리/imgCPI/MessageRouter2.png)

## Message Routing : Multicast
*Multicast를 사용하면 동일한 메시지를 둘 이상의 Receiver에게 전송할 수 있다. <br> 이를 통해 단일 통합 흐름에서 동일한 메시지에 대해 여러 작업을 수행할 수 있다. <br> Multicast가 없으면 동일한 수신 메시지에 대해 서로 다른 작업을 수행하기 위해서 별도의 프로세스가 필요하다.* <br>
1. *Sequential Multicast의 경우 메시지를 실행할 수 있는 순서를 정의할 수 있는 옵션이 존재한다. <br> 집계 알고리즘을 기반으로 다른 지점의 메시지를 하나의 단일 메시지로 결합해야 하는 경우에는 Join 및 Gather 단계를 이용해야한다.*
![](/CPI%20정리/imgCPI/Multicast.png)

## Message Routing : Join and Gather
*Join 요소를 사용하면 여러 경로의 메시지를 하나의 메시지로 결합하기 전에 하나의 메시지로 결합할 수 있다. <br> 이를 Gather 요소와 결합해서 사용한다. <br> Join은 메시지 내용에 영향을 주지 않고 다른 경로의 메시지만 결합한다.*

*Gather 단계를 통해 Integration Process에서 둘 이상의 메시지 흐름을 merge할 수 있다. <br> Gather단계를 사용해서 수집하는 메시지 유형에따라 데이터를 merge할 몇 가지 조건을 정의한다.*

1. *Gather를 선택할 수 있다.<br>*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *→ 다른형식의 XML메시지, 같은 형식의 XML메시지, 일반 텍스트 메시지*
2. *이를 바탕으로 두 메시지를 결합하는 전략을 선택한다.<br>* 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *→ 동일한 형식의 XMl 메시지의 경우 조건 없이 결합하거나 메시지를 결합해야 하는 노드에 대한 XPath를 지정할 수 있다.* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *→ 서로 다른 형식의 XML 메시지의 경우 메시지만 결합할 수 있다.* <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *→ 일반 텍스트 메시지의 경우 연결만 결합 전략으로 지정할 수 있다.* <br>
![](/CPI%20정리/imgCPI/JoinAndGather.png)

## Message Routing : Aggregator
*Aggregator 를 사용하면 Aggregation Stategy 및 상관관계 조건을 기반으로 시퀀스 흐름에서 여러 메시지를 병합할 수 있다.* <br>
*Properties View에서 Splitter type을 선택한다.* <br>

1. ***Correlation****은 통합 흐름의 서로 다른 메시지를 상관시키는데 사용되는 조건을 정의한다.*
2. ***Aggregation Strategy****는 수신메시지 형식에 따라 메시지를 다중 매핑 메시지 형식으로 결합할 수 있다.*
![](/CPI%20정리/imgCPI/Aggregator.png)

## Message Validators : XML Validator
### Validating Message Payload against XML Schema

*XML Validator는 구성된 XML 스키마에 대해서 XML 형식으로 메시지 Payload를 검증한다.* <br>
*이 단계는 프로세스 단계에서 메시지 Payload의 유효성을 검사하기 위해서 XML 스키마(XSD 파일)을 할당하는데 사용된다. <br> Validator는 메시지 페이도를 구성된 XML 스키마와 대조해서 검사하고, 메시지 payload의 불일치를 보고한다. <br> Validation에 실패하면 시스템은 기본적으로 전체 메시지 처리를 중지한다.*

*Validation 과정에서 시스템에 오류가 발생하더라도 처리를 계속하려면 실패 시 예외 방지 확인란을 선택한다.* <br>
![](/CPI%20정리/imgCPI/XMLValidator.png)

## DataStore Operations
*일반적인 시나리오에서 SAP CPI는 하나의 Participant로부터 메시지를 받아 다른 Participant에게 전달한다. <br> 방화벽 설정 또는 Participant가 SAP CPI에서 호출할 수 있는 Endpoint를 호스팅하지 않았기 때문에 SAP CPI가 Participant와 직접 통신할 수 없는 시나리오가 있을 수 있다. 도달할 수 없는 Participant에게 메시지를 전달하는 대신 일시적인 DataStore에 메시지를 저장할 수 있으며 <br> Participant는 저장된 메시지에 대해 일시적인 DataStore를 주기적으로 폴링한다.*

***참고*** *: 임시 DataStore는 나중에 처리할 메시지를 임시로 저장한다.*

***WriteOperation*** : *이 작업을 사용하면 보낸 사람의 메시지가 DataStore에 저장된다. <br> 저장된 메시지의 동작, 예를 들어 저장된 메시지가 삭제된 일수 등을 구성해야 한다.*

1. *헤더 SapDataStoreId에서 고유 ID를 정의할 수 있다. <br> ID가 정의되지 않은 경우 DataStore의 구성 요소는 ID를 생성하고 헤더를 설정한다.* <br>
*&nbsp;&nbsp;&nbsp;&nbsp;→ Global: DataStore는 하나의 테넌트에 배포된 모든 Integegration에서 공유될 수 있다.*<br>
*&nbsp;&nbsp;&nbsp;&nbsp;→ Integration Flow(Local) : DataStore는 하나의 Integration flow에서만 사용할 수 있다.*
2. *경고가 발생하기 전에 메시지를 가져올 기간을 정한다. 기본값은 2일이다.*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***참고 : 기존 메시지 덮어쓰기 옵션을 선택하면 기존 지속 메시지를 동일한 ID로 덮어쓰기할 수 있다.***

&nbsp;&nbsp;&nbsp;&nbsp;***Get Operation :*** *이 작업을 사용해서 Reciver는 메시지를 저장하는 동안 지정된 기존 DataStore이름과 메시지 ID를 사용해서 DataStore에서 메시지를 가져온다. <br> &nbsp;&nbsp;&nbsp;&nbsp;메시지 ID 값을 직접 지정하거나 ```${header.<headername containing message ID>}``` 또는 ```${xpath.<node containing message ID>}```와 같은 식을 &nbsp;&nbsp;&nbsp;제공할 수 있다.*

&nbsp;&nbsp;&nbsp;&nbsp;***참고 : Properties View 뿐만 아니라 헤더 SapDataStoreId에서 메시지 ID를 지정하는 경우 Properties View에 지정된 값이 우선된다.***

3. ***Select Operation:*** *이 작업을 수행하면 Receiver가 DataStore에서 메시지를 대량으로 가져온다. <br> DataStore에서 하나의 poll당 메시지를 가져오는 동작을 정의하는 매개 변수를 구성한다. <br> receiver가 메시지 가져오기를 완료하면 메시지 삭제를 허용하도록 선택할 수 있다. <br> 그렇지 않으면 삭제 작업을 사용해서 명시적으로 삭제하지 않는 한 메시지는 DataStore에 남아있다.*

&nbsp;&nbsp;&nbsp;&nbsp; *이 작업은 한 번에 여러 개의 메시지를 가져오고 하나의 대량 메시지를 만든다. <br> &nbsp;&nbsp;&nbsp;&nbsp; Select 작업의 Properties View에서 poll당 가져올 메시지 수를 지정하거나 헤더 SapDataStoreMaxResults를 설정 할 수 있다.*

***참고: 헤더에 Poll당 가져올 메시지 수와 Select 작업의 Properties View를 지정하는 경우 헤더가 우선이다.***
![](/CPI%20정리/imgCPI/DatastoreOperations1.png)<br>
![](/CPI%20정리/imgCPI/DatastoreOperations2.png)

4. ***Delete Operation*** : *이 작업을 통해서 DataStore에서 메시지 삭제를 트리거 할 수 있다. <br> 삭제할 메시지의 메시지 ID를 헤더 SapDataStoreId 또는 Properties View의 메시지 ID 필드에서 지정할 수 있다. <br> 메시지 ID를 직접 제공하는 대신에 메시지 ID 필드에 ```${header.<headername containing message ID>}``` 또는 ```${xpath.<node containing message ID>}```와 같은 식을 입력할 수도 있다. <br> 여러 메시지를 삭제하려면 SapDataStoreID 헤더에서 org.w3c.dom.NodeList와 함께 XPath 조건을 사용한다.*
![](/CPI%20정리/imgCPI/DatastoreOperations3.png)<br>
![](/CPI%20정리/imgCPI/DatastoreOperations4.png)

## Write Variables- Setting Global Variables
*Write Variable Step을 사용하면 Integeration 개발자가 동일한 iFlow 내에서 메시지 flow에 걸쳐 사용할 수 있는 값을 저장하거나 Tenent내의 서로 다른 iFlow에 걸쳐 사용할 수 있다.*

1. *동일한 iFlow 내에서 미시지 흐름 전반에 걸쳐 사용할 수 있는 변수를 정의한다. <br> Content Modifier step에서 Write Variables를 사용해서 저장된 값에 액세스할 수 있다.*
2. *이 옵션을 사용해서 동일한 테넌트 내의 서로 다른 iFlow에서 변수에 액세스할 수 있다.*

***참고 : Global을 On(WebUI)으로 설정하거나 "Global Scope(Eclipse)" 확인란을 선택하면 모든 iFlow에서 변수에 액세스할 수 있다.***
![](/CPI%20정리/imgCPI/SettingGlobalVariables.png)

## Write Variables- Accessing Global Variables in iFlow
*Write Variable Step을 사용하면 통합 개발자가 동일한 iFlow 내에서 Message Flow에 걸쳐 사용할 수 있는 값을 저장하거나 테넌트 내의 서로 다른 iFlow에 걸쳐 사용할 수 있다.*

*이러한 변수는 Content Modifier의 Header 또는 Properties를 사용해서 iFlow에서 액세스할 수 있다.*
![](/CPI%20정리/imgCPI/AccessingGlobalVariablesIniFlow.png)

## Tasks: Service Call > Request-Reply
*Service Call은 외부 시스템을 호출하는데 사용된다. <br> 이러한 호출들은 타겟 시스템으로부터 또는 타겟 시스템으로의 데이터 트랜잭션을 가능하게 한다.*
1. ***Request-Reply*** : *이 서비스 호출의 변형은 송신자와 수신자 시스템 간의 요청 및 응답 상호 작용을 가능하게 하는데 사용된다. <br> 회신으로 받은 응답은 다음 단계로 넘어간다.*<br>
![](/CPI%20정리/imgCPI/Request-Reply1.png)<br>
![](/CPI%20정리/imgCPI/Request-Reply2.png)

## Service Call > Content Enricher (Combine)
*Content Enricher는 Integeration Process에서 원래 메시지와 함께 Playload의 내용을 추가한다. <br> 이것은 두 개의 개별 메시지를 하나의 강화된 Payload로 변환한다. 이 기능을 사용하면 Integration Process에서 외부 호출로 추가 데이터를 얻을 수 있다.*

*Integration flow의 첫 번째 메시지를 원본 메시지로 간주하고 Integration Process에서 External Call을 통해 얻은 메시지를 조회 메시지로 간주한다.*

*두 가지 방법 중 하나를 선택해서 이 두 가지 Payload를 하나의 메시지로 강화할 수 있다.*
![](/CPI%20정리/imgCPI/ContentEnricherCombine.png)<br>
![](/CPI%20정리/imgCPI/ContentEnricherEnrich.png)

## Service Call > Send
*Send 단계는 응답이 예상되지 않는 시나리오 및 어댑터에 대한 Receiver system에 대한 서비스 호출을 구성하는데 사용된다.*

*이 단계는 어댑터 유형(전송 단계와 Receiver 사이의 채널)과 함께 사용할 수 있다.*

→ Mail Adapter<br>
→ SFTP Adapter<br>
![](/CPI%20정리/imgCPI/Send.png)

## Events
1. **Start Message** - *Integration Process의 첫 번째 단계, 스케줄이 지정되지 않은 발신자에 의해 트리거되는 경우(타이머 포함)*

2. **End Message** - *메시지가 receiver에게 전달되기 전에 Integration Process의 마지막 단계*

3. **Terminate Message** - *Reciver에게 메시지를 보내지 않고 프로세스를 종료하는데 사용*

4. **Error Start Event** - *예외 하위 프로세스에서만 사용되며, Embedded된 Integration Process에서 예외가 발생할 경우 Start로 사용된다.*

5. **Error End Event** - *예외를 기본 예외 처리기로 되돌리는데 사용된다.*

6. **Escalation** - *메시지 처리를 중지한다. 동기화된 메시지의 경우 보낸 사람에게 오류 메시지가 전송된다.*

7. **Start Event** - *Local Integration Process의 시작*

8. **End Evnet** - *Local Integration Process의 종료*

9. **Timer** - *사용자가 특정 일정에 따라 자동으로 시작되도록 프로세스를 구성한다.*
![](/CPI%20정리/imgCPI/Events.png)

## Security Elements : Content Encryptor & Content Decryptor

**Content Encryptor** <br>
*이 프로세스 단계는 내용을 암호화해서 메시지 내용이 클라우드의 다른 Participants에게 전송되는 동안 변경되지 않도록 보호하는데 사용된다.*

*메시지 내용을 암호화할 수 있을 뿐만 아니라 content에 서명해서 참가자에게 신원을 알림으로써 보내는 메시지의 진위를 확인한다. <br> 이 작업은 signature 알고리즘을 사용해서 메시지에 하나 이상의 개인 키로 signing함으로써 자신의 신원을 보장한다.*

**Content Decryptor** <br>
*이 프로세스 단계는 클라우드 참가자로부터 받은 메시지를 복호화하는데 사용된다.*

*관련 keystore에 개인 키가 포함되어 있어야 하며 그렇지 않으면 메시지 내용의 복호화가 작동하지 않는다. <br> 또한 수신된 서명된 메시지가 진짜인지 확인하기 위해서 서명된 데이터 객체의 서명을 확인할 수도 있다.*
![](/CPI%20정리/imgCPI/Encryptor&Decryptor.png)

## Security Elements : Message Signer
*이 프로세스의 단계는 Sender의 신원을 Participants에게 알려서 클라우드에서 보내는 메ㅣ지의 진위를 확인하는데 사용된다. <br> 이 작업은 서명 서명 알고리즘을 사용해서 메시지에 하나 이상의 개인키로 서명해서 사용자의 신원을 보장한다.*

**Working with PKCS#7/CMS Signer** <br>

*통합 흐름 모델에서 하나 이상의 개인 키 별칭을 제공하여 PKCS#7/CMS 서명자를 구성한다. 
서명자는 별칭 이름을 사용하여 키 저장소에서 DSA 또는 RSA 유형의 개인 키를 가져온다. 
또한 SHA512/RSA 또는 SHA/DSA와 같은 다이제스트 및 암호화 알고리즘의 조합인 각 키 유형에 대한 서명 알고리즘을 지정할 수 있다. 
PKCS#7/CMS 서명자는 알고리즘을 사용하여 해당 서명을 생성한다. 
서명자가 생성한 데이터를 서명된 데이터라고 한다.*
![](/CPI%20정리/imgCPI/MessageSigner.png)

## Security Elements: Signature Verifier

*이 프로세스 단계는 클라우드를 통해 수신된 서명된 메시지가 진짜인지 확인하는데 사용된다.*

1. *Integration flow model 에서는 서명된 데이터가 배치된 위치에 따라 공개 키 별명 및 메시지 헤더 또는 Body가 Base64로   인코딩되었는지 여부에 대한 정보를 제공해서 verifier를 구성한다.*

*서명된 데이터에 원본 내용이 포함된 경우 verifier에서 메시지 Body에 서명된 데이터를 제공한다.*
*서명된 데이터에 원본 내용이 포함되어 있지 않은 경우 verifier에서 SapCmsSignedData 헤더에 서명된 데이터를 입력하고 메시지 Body에 원본 내용을 입력한다.*

2. *Verifier는 공개 키 별명을 사용해서 메시지 digest를 복호화하는데 사용되는 DSA 또는 RSA 유형의 공개 키를 가져온다. <br> 이러한 방식으로 메시지에 서명한 참가자의 진위가 확인된다. <br> verification에 성공하지 못한 경우 verfier는 예외를 던져 사용자에게 알린다.*
![](/CPI%20정리/imgCPI/SignatureVerifier.png)