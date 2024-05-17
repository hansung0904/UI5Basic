# Best Practice for Using CSRF Protected Flag in CPI OData Adapter (Outbound)

## Introduction
*SAP CPI에는 백엔드 시스템에서 OData 서비스를 호출하는데 사용할 수 있는 OData Receiver Adapter가 있다. <br> GET,POST,PATCH,MERGE,DELETE 작업에 모두 사용할 수 있다.*

*OData Adapter의 "Connection" 속성에서 "CSRF Protected" 플래그를 찾을 수 있다. <br> CSRF는 사이트가 사용자의 브라우저에 가지고 있는 trust를 악용하는 특정 유형의 악의적인 공격인 Cross-Site Request Forgery(사이트 간 요청 위조)을 나타낸다.*<br>
![](/CPI%20CSRFProtected//img/CSRFProtected.png) <br>

*OData 어댑터에서 CSRF Protected는 기술적으로 OData 엔드포인트에 두 개의 HTTP 호출이 수행되는 방식으로 작동되는데 첫 번째 호출 동안 OData의 어댑터는 CSRF 토큰만 가져오고 두 번째(실제) HTTP 호출은 이전 Response에서 서버에 의해 제공된 토큰으로 수행된다.*

*기술적으로 두 번의 HTTP 호출이 수행되기 때문에, OData 어댑터 호출의 성능은 초기의 기술적 HTTP 호출(일반적으로 네트워크 통신에 참여하는 모든 네트워크 구성 요소 포함)에 대한 오버헤드로 인해서 성능이 저하될 수 있다.*

*많은 SAP OData 서비스에서 정상적인 작동을 위해서 CSRF가 보호가 필요하기 때문에 CSRF 보호를 해제하는것은 권장하지 않는 옵션이다. 이 옵션을 사용하지 않도록 설정하면 Service에서 HTTP 오류 403 - CSRF 토큰 유효성 검사 실패 메시지를 Return한다.*

## Typical use case and procedure
*많은 고객 시나리오에서 Integration Flow는 여러 OData 호출이 발생하는 방식으로 구축되는데 예를들어 GET 작업이 있는 호출은 백엔드 시스템에서 객체의 유무를 확인하고 그 결과에 따라 다음 POST 또는 PATCH 작업으로 호출되어 객체의 생성 또는 변경을 수행하게 된다.*

*이러한 시나리오에서는 백엔드에 대한 기술적 HTTP 호출 수를 최소화해서 최적의 성능을 구현하고 한다. 불필요한 호출을 제거하려면 Integeration flow에서 다음 설정을 활성화 하자*

## Step1: Activate HTTP Session reuse
*OData 어댑터는 호출 간에 CSRF 토큰을 재사용할 수 있다. 예를 들면 이전 GET 호출에 대해 생성된 토큰이 다음 POST 호출에 즉시 재사용 될 수 있다. <br> 이 기능이 작동하려면 HTTP 세션 재사용이 활성화 되어 있어야 한다. 이 설정은 Integeration flow -> runtime options에 있다.*
![](/CPI%20CSRFProtected/img/HTTP%20Session%20Reuse.png)<br>

*단일 메시지를 처리하는 동안 HTTP세션을 재사용할 수 있도록 하려면 이 필드의 값을 On Exchange로 설정한다.*

## Step2 : Disable "CSRF Protected" flag for the first OData call with GET operation
*어댑터의 Connection 속성에서 해당 플래그가 비활성화 되어 있는지 확인해보자.*
![](/CPI%20CSRFProtected/img/CSRFProtected2.png)

## Step3 : Enable"CSRF Protected" flag for the subsequent OData calls with changing operations
*어댑터의 Connection 속성에서 해당 플래그가 활성화 되어 있는지 확인해보자.*
![](/CPI%20CSRFProtected/img/CSRFProtected3.png)

*이러한 설정에서는 OData receiver adapter를 사용하는 동안 백엔드에서 추가 HTTP 호출이 없어야 한다.*