import { useState } from "react";
import { transcripts } from "./WebLayout";

const PhoneFrame = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="phone-frame">
    <div className="phone-inner">
      <div className="phone-title">{title}</div>
      {children}
    </div>
  </div>
);

type ContactId = "kim" | "lee" | "park";
type Direction = "incoming" | "outgoing";
type Phase = "list" | "before" | "in" | "after";

type MobileContact = {
  id: ContactId;
  name: string;
  company: string;
  role: string;
  phone: string;
  incomingNote: string;
  outgoingNote: string;
  memo: string[];
  actions: string[];
  afterSummary: string;
  afterTasks: string[];
  hasSchedule: boolean;
  scheduleLabel?: string;
};

const mobileContacts: Record<ContactId, MobileContact> = {
  kim: {
    id: "kim",
    name: "김준영",
    company: "한솔제지 영업1팀",
    role: "차장 · VIP",
    phone: "010-2847-5193",
    incomingNote: "서류 검토 결과와 예산 이야기 위주 통화 예정.",
    outgoingNote: "계약 일정 확정과 초안 공유를 위한 후속 통화.",
    memo: [
      "골프 동호회 활동, 주말 일정 피하기",
      "점심은 한식·깔끔한 식당 선호",
    ],
    actions: ["계약서 초안 메일 발송", "3천만원 기준 견적서 재전달"],
    afterSummary: "계약 방향은 긍정적이며, 미팅 일정과 예산 범위가 확정된 상태.",
    afterTasks: ["초안·견적 메일 발송", "캘린더 초대 보내기"],
    hasSchedule: true,
    scheduleLabel: "02.22 (목) 10:00 계약 미팅",
  },
  lee: {
    id: "lee",
    name: "이서현",
    company: "한빛제지 신규사업팀",
    role: "팀장",
    phone: "010-9321-4478",
    incomingNote: "파일럿 테스트 결과와 추가 요구사항 피드백 예정.",
    outgoingNote: "단가 조정안 공유 및 내부 검토 상황 확인 통화.",
    memo: [
      "새 라인 품질 안정화가 최우선",
      "월초에만 결재 가능, 일정 역산 필요",
    ],
    actions: ["파일럿 결과 정리 자료 공유", "단가 조정안 초안 작성"],
    afterSummary: "테스트 결과는 긍정적이며, 내부 검토 후 단가 조정 여부를 다시 통보받기로 함.",
    afterTasks: ["비교 견적 정리", "내부 검토 마감일까지 리마인드 설정"],
    hasSchedule: false,
  },
  park: {
    id: "park",
    name: "박진우",
    company: "세림패키지 구매팀",
    role: "과장",
    phone: "010-5510-2294",
    incomingNote: "재고 부담 줄이는 방식과 단가 재협의 요청이 있을 예정.",
    outgoingNote: "샘플 공급 일정과 발주 패턴 조정 제안 통화.",
    memo: [
      "가격에 민감, 경쟁사 견적 자주 비교",
      "소량·자주 발주를 선호",
    ],
    actions: ["샘플 공급 일정 제안 정리", "장기 계약안 초안 작성"],
    afterSummary: "샘플 테스트 후 장기 계약 가능성은 있지만, 추가 조건 협의가 필요한 상태.",
    afterTasks: ["샘플 발송 후 피드백 요청", "장기 단가 옵션 정리"],
    hasSchedule: false,
  },
};

export const MobileScreens = () => {
  const [phase, setPhase] = useState<Phase>("list");
  const [selectedId, setSelectedId] = useState<ContactId | null>(null);
  const [direction, setDirection] = useState<Direction | null>(null);

  const current: MobileContact | null = selectedId ? mobileContacts[selectedId] : null;

  const goToBefore = (id: ContactId, dir: Direction) => {
    setSelectedId(id);
    setDirection(dir);
    setPhase("before");
  };

  const resetToList = () => {
    setPhase("list");
    setDirection(null);
    setSelectedId(null);
  };

  return (
    <div className="mobile-grid">
      {/* 1. 회원 목록 화면 */}
      {phase === "list" && (
        <PhoneFrame title="고객 선택">
          <div className="mobile-section">
            <div className="section-title-inline">통화할 고객을 선택하세요</div>
            <ul className="customer-mobile-list">
              {Object.values(mobileContacts).map((c) => (
                <li key={c.id} className="customer-mobile-item">
                  <div className="customer-mobile-main">
                    <div className="customer-mobile-name">{c.name}</div>
                    <div className="customer-mobile-meta">
                      {c.company} · {c.role}
                    </div>
                    <div className="customer-mobile-phone">{c.phone}</div>
                  </div>
                  <div className="customer-mobile-actions">
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={() => goToBefore(c.id, "incoming")}
                    >
                      수신
                    </button>
                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => goToBefore(c.id, "outgoing")}
                    >
                      발신
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </PhoneFrame>
      )}

      {/* 2. 통화 전 화면 */}
      {phase === "before" && current && direction && (
        <PhoneFrame
          title={direction === "incoming" ? "통화 전 브리핑 (수신)" : "통화 전 브리핑 (발신)"}
        >
          <div className="mobile-header-row">
            <span onClick={resetToList}>← 목록</span>
            <span className="mobile-header-name">{current.name}</span>
            <span className="link-text">편집</span>
          </div>

          <div className="profile-main mobile">
            <div className="avatar-large">준</div>
            <div>
              <div className="profile-name">{current.name}</div>
              <div className="profile-meta profile-meta-wrap">
                <span className="profile-company">{current.company}</span>
                <span className="profile-role">{current.role}</span>
              </div>
              <div className="profile-phone">{current.phone}</div>
            </div>
          </div>

          <div className="divider" />

          <div className="mobile-section">
            <div className="section-title-inline">
              {direction === "incoming" ? "이번 통화에서 들을 내용" : "이번 통화에서 이야기할 내용"}
            </div>
            <p className="mobile-paragraph">
              {direction === "incoming" ? current.incomingNote : current.outgoingNote}
            </p>
          </div>

          <div className="divider" />

          <div className="mobile-section">
            <div className="section-title-inline">메모</div>
            <ul className="bullet-list compact">
              {current.memo.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="divider" />

          <div className="mobile-section">
            <div className="section-title-inline">이번 통화 후 할 일</div>
            <ul className="checklist compact">
              {current.actions.map((a) => (
                <li key={a}>☐ {a}</li>
              ))}
            </ul>
          </div>

          <div className="mobile-bottom">
            <button
              className="primary-button full"
              type="button"
              onClick={() => setPhase("in")}
            >
              통화 {direction === "incoming" ? "받기" : "걸기"}
            </button>
            <div className="helper-text">
              {direction === "incoming"
                ? "통화 수신 시 자동으로 녹음이 시작됩니다."
                : "통화 시작 시 자동 녹음됩니다."}
            </div>
          </div>
        </PhoneFrame>
      )}

      {/* 3. 통화 중 화면 */}
      {phase === "in" && current && direction && (
        <PhoneFrame title="통화 중 화면">
          <div className="mobile-section">
            <div className="badge recording">
              {direction === "incoming" ? "수신 통화 중" : "발신 통화 중"} · REC 00:03:42
            </div>
            <div className="profile-main mobile">
              <div className="avatar-large">준</div>
              <div>
                <div className="profile-name">{current.name}</div>
                <div className="profile-meta profile-meta-wrap">
                  <span className="profile-company">{current.company}</span>
                  <span className="profile-role">{current.role}</span>
                </div>
                <div className="profile-phone">{current.phone}</div>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="mobile-section">
            <div className="section-title-inline">빠른 메모</div>
            <textarea
              className="memo-input"
              placeholder="중요하게 나온 키워드만 간단히 적어두세요."
              readOnly
            />
            <div className="tag-row">
              <span>[#계약]</span>
              <span>[#일정]</span>
              <span>[#견적]</span>
              <span>[#팔로업]</span>
            </div>
          </div>

          <div className="divider" />

          <div className="mobile-section">
            <div className="section-title-inline">참고 (이전 요약)</div>
            <p className="mobile-paragraph">
              {direction === "incoming"
                ? "지난 통화에서 나온 주요 쟁점을 다시 확인하면서 듣기 좋습니다."
                : "지난 통화에서 약속한 부분을 다시 짚어 주면 신뢰감을 줄 수 있습니다."}
            </p>
          </div>

          <div className="mobile-bottom column">
            <button
              className="call-end"
              type="button"
              onClick={() => setPhase("after")}
            >
              통화 종료
            </button>
            <div className="dual-actions">
              <button className="secondary-button" type="button">
                음소거
              </button>
              <button className="secondary-button" type="button">
                스피커
              </button>
            </div>
          </div>
        </PhoneFrame>
      )}

      {/* 4. 통화 후 화면 */}
      {phase === "after" && current && (
        <PhoneFrame title="통화 후 리포트">
          <div className="mobile-header-row">
            <span onClick={resetToList}>← 목록</span>
            <span className="mobile-header-name">{current.name}</span>
            <span className="link-text">편집</span>
          </div>

          <div className="profile-main mobile">
            <div className="avatar-large">준</div>
            <div>
              <div className="profile-name">{current.name}</div>
              <div className="profile-meta profile-meta-wrap">
                <span className="profile-company">{current.company}</span>
                <span className="profile-role">{current.role}</span>
              </div>
              <div className="profile-phone">{current.phone}</div>
            </div>
          </div>

          <div className="summary-pill-wrap">
            <div className="summary-pill">요약</div>
          </div>
          <div className="mobile-date">방금 통화 종료</div>

          <div className="mobile-scroll-area">
            <div className="ai-card">
              <div className="ai-card-title">{current.afterSummary}</div>

              {current.hasSchedule && current.scheduleLabel && (
                <>
                  <div className="ai-card-subtitle">확정된 일정</div>
                  <div className="schedule-pill-row">
                    <span className="badge-soft">{current.scheduleLabel}</span>
                  </div>
                </>
              )}

              <div className="ai-card-subtitle">이번 통화 후 할 일</div>
              <ul className="ai-bullets">
                {current.afterTasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="chat-wrap">
              {transcripts[current.id].map((line) => (
                <div
                  key={`${line.time}-${line.text}`}
                  className={`bubble ${
                    line.speaker === "agent" ? "right" : "left"
                  }`}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
      )}
    </div>
  );
};

