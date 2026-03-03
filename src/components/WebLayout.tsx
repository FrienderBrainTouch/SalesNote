import { ReactNode, useState } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="section-title">
    <span>{children}</span>
  </div>
);

type CustomerId = "kim" | "lee" | "park";

type CustomerCall = {
  datetime: string;
  duration: string;
  summary: string;
};

type CustomerData = {
  name: string;
  companyRole: string;
  phone: string;
  badge?: string;
  memo: string[];
  nextSchedule: { date: string; label: string }[];
  keywords: string[];
  hasScheduleResult: boolean;
  call1: CustomerCall;
  call2: CustomerCall;
};

const customers: Record<CustomerId, CustomerData> = {
  kim: {
    name: "김준영",
    companyRole: "한솔제지 영업1팀 / 차장",
    phone: "010-2847-5193",
    badge: "VIP",
    memo: [
      "골프 치시는 분, 동호회 얘기 나왔음",
      "점심은 한식 선호 (정갈한 곳 좋아하심)",
      "결재는 팀장님 통해서 나옴",
      "단가 이야기할 땐 여유 두고 하는 게 좋음",
    ],
    nextSchedule: [
      { date: "2024.02.22 (목) 오전 10:00", label: "계약 미팅" },
      { date: "2024.02.28", label: "재연락 예정" },
    ],
    keywords: ["계약", "견적", "예산 3천", "미팅 일정", "서류 검토"],
    hasScheduleResult: true,
    call1: {
      datetime: "2024.02.15 (목) 14:32",
      duration: "8분 23초",
      summary: "서류 문제 없고, 예산 3천만원대로. 02.22 (목) 10시 미팅 확정.",
    },
    call2: {
      datetime: "2024.02.08 (목) 11:15",
      duration: "4분 10초",
      summary: "새 상품은 관심은 있는데, 팀에서 내부 검토 후 연락 주시기로 함.",
    },
  },
  lee: {
    name: "이서현",
    companyRole: "한빛제지 신규사업팀 / 팀장",
    phone: "010-9321-4478",
    badge: "A등급",
    memo: [
      "신규 라인 오픈 예정, 샘플 테스트 중요",
      "단가보다 납기와 품질을 더 중시",
      "월초에만 결재 가능, 일정 조율 필요",
    ],
    nextSchedule: [
      { date: "2024.02.20 (화) 오후 3:00", label: "단가 조정 리뷰" },
      { date: "2024.03.05", label: "파일럿 납품 일정 논의" },
    ],
    keywords: ["파일럿", "납기", "샘플 테스트", "단가 조정"],
    hasScheduleResult: false,
    call1: {
      datetime: "2024.02.14 (수) 16:10",
      duration: "6분 01초",
      summary: "파일럿 물량 납기 재확인, 단가 조정은 내부 검토 후 다시 연락 주기로 함.",
    },
    call2: {
      datetime: "2024.02.02 (금) 10:05",
      duration: "5분 33초",
      summary: "신규 라인 사양 공유받고, 테스트용 샘플 3종 발송하기로 함.",
    },
  },
  park: {
    name: "박진우",
    companyRole: "세림패키지 구매팀 / 과장",
    phone: "010-5510-2294",
    badge: "일반",
    memo: [
      "가격 민감, 경쟁사 견적 자주 비교",
      "재고 부담을 싫어해서 소량·자주 발주 선호",
    ],
    nextSchedule: [
      { date: "2024.02.23 (금) 오후 4:00", label: "샘플 공급 일정 논의" },
    ],
    keywords: ["재고", "단가", "샘플", "발주 조정"],
    hasScheduleResult: false,
    call1: {
      datetime: "2024.02.13 (화) 09:40",
      duration: "7분 02초",
      summary: "기존 단가에 부담을 느끼고 있어, 대체 원단과 조건 제안 요청.",
    },
    call2: {
      datetime: "2024.02.01 (목) 15:22",
      duration: "3분 48초",
      summary: "이번 달 발주 수량 조정 요청, 납기 일정 재확인.",
    },
  },
};

type TranscriptLine = {
  speaker: "agent" | "customer";
  name: string;
  time: string;
  text: string;
};

export const transcripts: Record<CustomerId, TranscriptLine[]> = {
  kim: [
    {
      speaker: "agent",
      name: "영업",
      time: "00:05",
      text: "김 차장님, 지난번에 검토 요청 주신 계약 초안과 변경분 정리해서 다시 연락드렸습니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "00:18",
      text: "네, 잘 받았습니다. 내부에서 한 번 훑어봤는데 전반적인 방향은 괜찮았습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "00:35",
      text: "예산은 말씀 주신 3천만원 선 안에서 맞춰 봤고, 옵션 구성만 몇 가지 나눠서 정리해 두었습니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "00:52",
      text: "옵션별로 차이가 어느 정도인지 한눈에 볼 수 있게만 정리돼 있으면 될 것 같습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:10",
      text: "그래서 기본안, 확장안 두 가지로 나눠서 표로 만들었습니다. 기본안이 3천 안쪽, 확장안이 약간 상단 구간입니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "01:32",
      text: "확장안도 참고는 할 텐데, 우선은 기본안을 기준으로 내부 공유를 진행해 보겠습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:55",
      text: "네, 알겠습니다. 기본안을 중심으로 설명드리고, 필요하면 확장안으로 조정할 수 있다고 말씀드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "02:18",
      text: "좋습니다. 그럼 다음 주에 한 번 뵙고 세부 조정까지 같이 보면 될 것 같네요.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "02:32",
      text: "목요일 오전 10시로 캘린더에 잡아 두겠습니다. 미팅 전에 다시 한 번 자료 정리해서 보내 드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "02:48",
      text: "네, 그 시간 괜찮습니다. 메일 오면 팀원들이랑 미리 보고 갈게요.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "03:05",
      text: "혹시 미리 확인하시다가 추가로 궁금하신 점 생기면 편하게 메신저로 남겨 주셔도 됩니다.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "03:22",
      text: "네, 그렇게 하겠습니다. 오늘 설명은 충분했습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "03:40",
      text: "감사합니다. 그럼 목요일에 뵙겠습니다, 차장님.",
    },
    {
      speaker: "customer",
      name: "김준영",
      time: "03:48",
      text: "네, 수고 많으십니다.",
    },
  ],
  lee: [
    {
      speaker: "agent",
      name: "영업",
      time: "00:07",
      text: "팀장님, 지난번 파일럿 테스트 결과 정리해서 공유드리려고 연락드렸습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "00:20",
      text: "네, 생산 쪽에서 품질은 괜찮다고 들었습니다. 다만 첫 주에만 약간 불안정했다는 이야기가 있었습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "00:38",
      text: "맞습니다. 초기 세팅 구간에서만 편차가 있었고, 두 번째 주부터는 불량률이 기존 자재와 비슷한 수준으로 내려왔습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "00:55",
      text: "그 정도면 전환 자체에는 큰 문제는 없을 것 같아요. 납기만 조금 더 여유 있게 잡아 주시면 좋겠습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:15",
      text: "초기 두 달은 안전하게 리드타임을 일주일 더 잡고, 이후에는 기존 리드타임으로 줄이는 안을 생각하고 있습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "01:32",
      text: "네, 내부에서도 그 정도 여유는 필요하다는 의견이 많았습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:50",
      text: "단가 부분은 기존 대비 크게 올리지 않고, 파일럿 기간 동안은 동일 단가로 유지하는 안을 준비했습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "02:05",
      text: "테스트 기간 동안 동일 단가라면 부담은 덜할 것 같네요. 이후 조정안은 내부 승인 절차를 한 번 더 거쳐야 합니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "02:25",
      text: "그래서 비교표를 같이 드리려고 합니다. 기존 단가와 조정안을 한 페이지에 정리해서 검토하시기 쉽도록 하겠습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "02:42",
      text: "좋습니다. 그 자료가 있으면 임원 보고 때도 설명이 수월할 것 같아요.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "03:00",
      text: "이번 주 안에 자료 보내 드리고, 다음 주 중에 한 번 더 통화 드려서 내부 의견 들어보겠습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "03:15",
      text: "네, 다음 주 수요일 오후 정도에 한 번 더 이야기 나누면 좋겠습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "03:30",
      text: "알겠습니다. 그 시간에 맞춰 다시 연락드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "이서현",
      time: "03:40",
      text: "네, 고생 많으십니다.",
    },
  ],
  park: [
    {
      speaker: "agent",
      name: "영업",
      time: "00:06",
      text: "박 과장님, 이번 달 발주 수량이 조금 줄어든 것 같아서 상황 여쭤보려고 연락드렸습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "00:20",
      text: "네, 재고가 생각보다 많이 쌓여 있어서 한두 달 정도는 보수적으로 가보자는 의견이 나왔습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "00:38",
      text: "그래서 이번 달에는 최소 수량으로 조정해 드리고, 대신 다음 분기 수요 예측을 같이 보면서 계획을 잡아보면 어떨까 합니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "00:55",
      text: "좋습니다. 저희도 분기 단위로는 어느 정도 그림이 있어서 공유드릴 수 있습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:12",
      text: "그렇게 되면 저희도 생산 계획을 안정적으로 가져갈 수 있어서, 단가 부분에서도 조금 더 유리한 조건을 드릴 수 있습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "01:30",
      text: "장기적으로 단가에 도움이 된다면 저희도 긍정적으로 검토할 수 있을 것 같습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "01:48",
      text: "그럼 이번 주 안에 분기별 예상 수량 받아보고, 그 기준으로 장기 단가 옵션을 정리해서 제안드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "02:05",
      text: "네, 엑셀로 정리해서 메일로 보내드릴게요. 대략적인 최소·최대 범위를 같이 적어 두겠습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "02:25",
      text: "감사합니다. 그 자료 기준으로 샘플 공급 일정과 테스트 계획도 같이 묶어서 제안드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "02:40",
      text: "네, 그렇게 진행해 주시면 내부 구매 회의에서 이야기하기 좋을 것 같네요.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "02:55",
      text: "회의 일정 잡히면 말씀만 주시면, 필요하시면 온라인으로라도 잠깐 설명 드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "03:10",
      text: "그 부분도 좋습니다. 상담이 필요하면 따로 요청드리겠습니다.",
    },
    {
      speaker: "agent",
      name: "영업",
      time: "03:25",
      text: "네, 오늘 말씀 감사드립니다. 자료 정리되는 대로 다시 공유드리겠습니다.",
    },
    {
      speaker: "customer",
      name: "박진우",
      time: "03:35",
      text: "네, 수고 많으십니다.",
    },
  ],
};

export const WebLayout = () => {
  const [activeCustomer, setActiveCustomer] = useState<CustomerId>("kim");
  const [selectedCallId, setSelectedCallId] = useState<"call1" | "call2">("call1");
  const [calendarRegistered, setCalendarRegistered] = useState<Record<CustomerId, boolean>>({
    kim: false,
    lee: false,
    park: false,
  });
  const [todosByCustomer, setTodosByCustomer] = useState<
    Record<CustomerId, { id: number; label: string; done: boolean }[]>
  >({
    kim: [
      { id: 1, label: "계약서 초안 메일로 보내기", done: false },
      { id: 2, label: "견적서 3천만원 기준으로 다시 보내기", done: false },
      { id: 3, label: "일정 초대 메일 발송", done: false },
    ],
    lee: [
      { id: 1, label: "파일럿 테스트 일정 확정 메일 보내기", done: false },
      { id: 2, label: "단가 조정안 내부 검토 후 공유", done: false },
    ],
    park: [
      { id: 1, label: "샘플 공급 일정 제안 메일 발송", done: false },
      { id: 2, label: "다음 달 발주 예상 수량 확인 요청", done: false },
    ],
  });

  const handleToggleTodo = (id: number) => {
    setTodosByCustomer((prev) => {
      const currentTodos = prev[activeCustomer] ?? [];
      return {
        ...prev,
        [activeCustomer]: currentTodos.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item,
        ),
      };
    });
  };

  const current = customers[activeCustomer];

  return (
    <div className="web-layout">
      <header className="web-topbar">
        <div className="web-topbar-left">
          <span className="web-logo">SalesNote</span>
          <span className="web-topbar-sep" />
          <span className="web-topbar-sub">영업 노트 · 오늘 1건 진행 중</span>
        </div>
        <div className="web-top-actions">
          <input
            className="top-search"
            placeholder="Q 이름 검색"
            readOnly
          />
          <button className="topbar-secondary-btn" type="button">
            알림
          </button>
          <div className="avatar">SJ</div>
        </div>
      </header>

      <div className="web-body">
        {/* 좌측 고정 고객 패널 */}
        <aside className="left-panel">
          <div className="customer-layout">
            <div className="customer-list">
              {(
                [
                  { id: "kim", label: "김준영" },
                  { id: "lee", label: "이서현" },
                  { id: "park", label: "박진우" },
                ] as { id: CustomerId; label: string }[]
              ).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`customer-item ${activeCustomer === c.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCustomer(c.id);
                    setSelectedCallId("call1");
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="customer-detail">
              <div className="profile-main">
                <div className="avatar-large">준</div>
                <div>
                  <div className="profile-name">{current.name}</div>
                  <div className="profile-meta">{current.companyRole}</div>
                  {current.badge && (
                    <div className="profile-badge vip">{current.badge}</div>
                  )}
                  <div className="profile-phone">{current.phone}</div>
                </div>
              </div>

              <div className="divider" />

              <SectionTitle>메모</SectionTitle>
              <ul className="bullet-list">
                {current.memo.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <button className="ghost-button" type="button">
                + 메모 추가
              </button>

              <div className="divider" />

              <SectionTitle>다음 일정</SectionTitle>
              <div className="schedule-list">
                {current.nextSchedule.map((s) => (
                  <div className="schedule-item" key={s.date + s.label}>
                    <div className="schedule-date">{s.date}</div>
                    <div className="schedule-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="divider" />

              <SectionTitle>통화 통계</SectionTitle>
              <div className="stats">
                <div className="stats-row">
                  <span>총 통화</span>
                  <strong>12회</strong>
                </div>
                <div className="stats-row">
                  <span>평균 통화 시간</span>
                  <strong>6분 42초</strong>
                </div>
                <div className="stats-row column">
                  <span>감정 추이</span>
                  <div className="trend-chart">
                    <div className="trend-bar positive" />
                    <div className="trend-bar neutral" />
                    <div className="trend-bar negative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* 우측 통화 타임라인 */}
        <section className="right-panel">
          <div className="right-header">
            <div>
              <div className="right-title">통화 기록</div>
              <div className="right-subtitle">
                오늘 12건 중 1건 선택됨 · 마지막 업데이트 2분 전
              </div>
            </div>
            <button className="primary-button" type="button">
              새 통화 예약
            </button>
          </div>

          <div className="right-grid">
            <div className="timeline-col">
              <div className="keyword-row">
                <div className="keyword-title">주요 키워드</div>
                <div className="chip-row">
                  {current.keywords.map((k) => (
                    <span key={k} className="chip">
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <div className="call-list timeline-list">
                <div
                  className={`call-card ${selectedCallId === "call1" ? "selected" : ""}`}
                  onClick={() => setSelectedCallId("call1")}
                >
                  <div className="call-meta">
                    <span>{current.call1.datetime}</span>
                    <span className="call-duration">{current.call1.duration}</span>
                  </div>
                  <p className="call-quote">
                    {current.call1.summary}
                  </p>
                </div>

                <div
                  className={`call-card condensed ${
                    selectedCallId === "call2" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCallId("call2")}
                >
                  <div className="call-meta">
                    <span>{current.call2.datetime}</span>
                    <span className="call-duration">{current.call2.duration}</span>
                  </div>
                  <p className="call-quote">
                    {current.call2.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-col">
              <div className="detail-card">
                <div className="detail-header">
                  <div className="detail-title">요약</div>
                  <button className="link-button" type="button">
                    리포트 보기
                  </button>
                </div>
                <p className="detail-paragraph">
                  {selectedCallId === "call1" ? current.call1.summary : current.call2.summary}
                </p>
              </div>

              <div className="detail-card">
                <div className="detail-title">해야 할 일</div>
                <ul className="checklist">
                  {(todosByCustomer[activeCustomer] ?? []).map((item) => (
                    <li
                      key={item.id}
                      className={item.done ? "done" : undefined}
                      onClick={() => handleToggleTodo(item.id)}
                    >
                      {item.done ? "☑" : "☐"} {item.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-card">
                {current.hasScheduleResult ? (
                  <>
                    <div className="detail-title">나온 일정</div>
                    {current.nextSchedule[0] && (
                      <div className="detail-row">
                        <span className="badge-soft">
                          {current.nextSchedule[0].date.split(" ")[0]}
                        </span>
                        <span className="badge-soft">
                          {current.nextSchedule[0].date.split(" ").slice(1).join(" ")}
                        </span>
                        <span>{current.nextSchedule[0].label}</span>
                      </div>
                    )}

                    <div className="schedule-confirm compact">
                      <div className="schedule-text">
                        <div className="schedule-title">
                          {calendarRegistered[activeCustomer]
                            ? "캘린더에 등록되었습니다"
                            : "캘린더에 등록할까요?"}
                        </div>
                        <label className="form-row">
                          <span>제목</span>
                          <input
                            readOnly
                            value={`${current.nextSchedule[0]?.label ?? "미팅"} - ${
                              current.name
                            }`}
                            className="text-input"
                          />
                        </label>
                        <label className="form-row">
                          <span>시간</span>
                          <input
                            readOnly
                            value={
                              current.nextSchedule[0]?.date.split(" ").slice(-1)[0] ??
                              "시간 미정"
                            }
                            className="text-input"
                          />
                        </label>
                      </div>
                      <div className="schedule-actions">
                        <button
                          className="primary-button"
                          type="button"
                          disabled={calendarRegistered[activeCustomer]}
                          onClick={() =>
                            setCalendarRegistered((prev) => ({
                              ...prev,
                              [activeCustomer]: true,
                            }))
                          }
                        >
                          {calendarRegistered[activeCustomer] ? "완료" : "등록"}
                        </button>
                        {!calendarRegistered[activeCustomer] && (
                          <button className="secondary-button" type="button">
                            나중에
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="detail-title">이번 통화에서 확정된 일정 없음</div>
                )}
              </div>

              <div className="detail-card">
                <div className="detail-title">통화 기록</div>
                <div className="utterance-scroll">
                  <div className="utterance-list">
                    {transcripts[activeCustomer].map((line) => (
                      <div className="utterance-row" key={`${line.time}-${line.text}`}>
                        <span
                          className={`speaker-dot ${
                            line.speaker === "agent" ? "s1" : "s2"
                          }`}
                        />
                        <div className="utterance-body">
                          <div className="utterance-meta">
                            <strong>{line.name}</strong>
                            <span>{line.time}</span>
                          </div>
                          <div className="utterance-text">{line.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-title">메모</div>
                <div className="memo-box">
                  - 결재 라인은 팀장님 확인 필요{"\n"}- 단가 이슈는 마지막에 정리{"\n"}
                  - 미팅 전에 초안/견적 먼저 전달
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

