import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <div className="section-title">
    <span>{children}</span>
  </div>
);

export const WebLayout = () => {
  return (
    <div className="web-layout">
      <header className="web-topbar">
        <div className="web-logo">SalesNote</div>
        <div className="web-top-actions">
          <input
            className="top-search"
            placeholder="고객명, 메모, 키워드 검색"
            readOnly
          />
          <button className="icon-button" type="button">
            🔔
          </button>
          <div className="avatar">SJ</div>
        </div>
      </header>

      <div className="web-body">
        {/* 좌측 고정 고객 패널 */}
        <aside className="left-panel">
          <div className="profile-main">
            <div className="avatar-large">홍</div>
            <div>
              <div className="profile-name">홍길동</div>
              <div className="profile-meta">삼성전자 / 부장</div>
              <div className="profile-badge vip">VIP ⭐</div>
              <div className="profile-phone">010-1234-5678</div>
            </div>
          </div>

          <div className="divider" />

          <SectionTitle>📝 메모</SectionTitle>
          <ul className="bullet-list">
            <li>골프 좋아함</li>
            <li>점심은 한식 선호</li>
            <li>의사결정 빠른 편</li>
            <li>가격에 민감한 편</li>
          </ul>
          <button className="ghost-button" type="button">
            + 메모 추가
          </button>

          <div className="divider" />

          <SectionTitle>📅 다음 일정</SectionTitle>
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-date">2024.02.22</div>
              <div className="schedule-label">계약 미팅</div>
            </div>
            <div className="schedule-item">
              <div className="schedule-date">2024.02.28</div>
              <div className="schedule-label">팔로업 예정</div>
            </div>
          </div>

          <div className="divider" />

          <SectionTitle>📊 통화 통계</SectionTitle>
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
              <span>감정 트렌드</span>
              <div className="trend-chart">
                <div className="trend-bar positive" />
                <div className="trend-bar neutral" />
                <div className="trend-bar negative" />
              </div>
            </div>
          </div>
        </aside>

        {/* 우측 통화 타임라인 */}
        <section className="right-panel">
          <div className="right-header">
            <div className="right-title">📋 통화 기록</div>
            <button className="primary-button" type="button">
              + 새 통화 예약
            </button>
          </div>

          <div className="call-list">
            <div className="call-card">
              <div className="call-meta">
                <span>📞 2024.02.15 (목) 14:32</span>
                <span className="call-duration">통화시간 8분 23초</span>
              </div>
              <p className="call-quote">
                &quot;다음 주 계약 관련 서류 검토 후 재연락 예정, 예산은 3천만원
                내외로 협의 가능하다고 함&quot;
              </p>

              <div className="ai-panel">
                <div className="ai-panel-header">🤖 AI 분석</div>

                <div className="ai-section">
                  <SectionTitle>📌 요약</SectionTitle>
                  <p>
                    계약 서류 검토 후 재연락 협의. 예산 3천만원 내외 확인. 다음 주
                    중 미팅 제안.
                  </p>
                </div>

                <div className="ai-section">
                  <SectionTitle>✅ 액션 아이템</SectionTitle>
                  <ul className="checklist">
                    <li>☐ 계약서 초안 발송</li>
                    <li>☐ 견적서 3천만원 기준 재작성</li>
                  </ul>
                </div>

                <div className="ai-section">
                  <SectionTitle>😊 감정 분석</SectionTitle>
                  <div className="sentiment-row">
                    긍정 68% · 중립 24% · 부정 8%
                  </div>
                  <div className="sentiment-bar">
                    <div className="sentiment positive" style={{ width: "68%" }} />
                    <div className="sentiment neutral" style={{ width: "24%" }} />
                    <div className="sentiment negative" style={{ width: "8%" }} />
                  </div>
                </div>

                <div className="ai-section">
                  <SectionTitle>🗓️ 일정 감지</SectionTitle>
                  <p>&quot;다음 주 중 미팅&quot; 언급 감지됨</p>

                  <div className="inline-calendar">
                    <div className="calendar-header">&lt; 2024년 2월 &gt;</div>
                    <div className="calendar-grid">
                      <div>일</div>
                      <div>월</div>
                      <div>화</div>
                      <div>수</div>
                      <div>목</div>
                      <div>금</div>
                      <div>토</div>
                      <div />
                      <div />
                      <div />
                      <div />
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                      <div className="calendar-day highlight">15</div>
                      <div>16</div>
                      <div>17</div>
                      <div>18</div>
                      <div>19</div>
                      <div>20</div>
                      <div>21</div>
                      <div className="calendar-day selected">22</div>
                      <div>23</div>
                      <div>24</div>
                      <div>25</div>
                      <div>26</div>
                      <div>27</div>
                      <div>28</div>
                    </div>
                  </div>

                  <div className="schedule-confirm">
                    <div className="schedule-text">
                      <div className="schedule-title">
                        📅 2024년 2월 22일 (목) 에 등록할까요?
                      </div>
                      <label className="form-row">
                        <span>제목</span>
                        <input
                          readOnly
                          value="계약 미팅 - 홍길동"
                          className="text-input"
                        />
                      </label>
                      <label className="form-row">
                        <span>시간</span>
                        <input readOnly value="오전 10:00" className="text-input" />
                      </label>
                    </div>
                    <div className="schedule-actions">
                      <button className="primary-button" type="button">
                        ✓ 일정 등록
                      </button>
                      <button className="secondary-button" type="button">
                        나중에
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ai-section transcript-section">
                  <SectionTitle>📝 전체 텍스트 (STT)</SectionTitle>
                  <div className="transcript-box">
                    홍길동: 네, 안녕하세요. 지난번에 말씀드렸던 계약 관련해서 다시 한 번
                    정리드리려고 연락드렸습니다.{"\n"}
                    고객: 네, 서류는 어제 다 받아서 검토해 봤습니다. 내부에서 크게 문제
                    될 부분은 없었어요.{"\n"}
                    홍길동: 다행이네요. 예산은 말씀 주셨던 3천만원 내외 범위로 생각하고
                    계신 걸로 이해하면 될까요?{"\n"}
                    고객: 네, 3천 정도 선이면 될 것 같습니다. 다만 옵션에 따라 조금
                    조정은 있을 수 있을 것 같아요.{"\n"}
                    홍길동: 알겠습니다. 그럼 제가 3천만원 기준으로 견적서를 한번
                    재작성해서 보내드리고요,{"\n"}
                    {"        "}다음 주 중에 서류 다시 같이 보면서 최종 확정하는 미팅
                    제안드려도 괜찮을까요?{"\n"}
                    고객: 네, 다음 주 화요일이나 수요일 오전이면 좋을 것 같습니다.{"\n"}
                    홍길동: 그러면 일단 22일 목요일 오전 10시로 잠정 예약해 두고,
                    일정 초대 메일과 계약서 초안 같이 보내드리겠습니다.{"\n"}
                    고객: 네, 그렇게 해 주세요.{"\n"}
                    홍길동: 감사합니다. 그럼 자료 정리해서 오늘 안으로 공유드리겠습니다.
                  </div>
                </div>
              </div>
            </div>

            <div className="call-card condensed">
              <div className="call-meta">
                <span>📞 2024.02.08 (목) 11:15</span>
                <span className="call-duration">통화시간 4분 10초</span>
              </div>
              <p className="call-quote">
                &quot;신규 상품 라인업 소개, 관심 보였으나 내부 검토 필요하다고 함&quot;
              </p>
              <div className="ai-panel inline">
                <div className="ai-panel-header">
                  🤖 AI 분석
                  <button className="link-button" type="button">
                    펼치기 ▼
                  </button>
                </div>
                <p className="ai-preview">요약 / 액션 / 감정 분석 미리보기...</p>
              </div>

              <div className="ai-panel transcript-inline">
                <div className="ai-section transcript-section">
                  <SectionTitle>📝 전체 텍스트 (STT)</SectionTitle>
                  <div className="transcript-box small">
                    홍길동: 안녕하세요, 지난번에 관심 보이셨던 신규 상품 라인업 관련해서
                    간단히 설명드리려고 연락드렸습니다.{"\n"}
                    고객: 네, 어떤 내용인지 한번 들어볼게요.{"\n"}
                    홍길동: 이번에 출시된 A·B 두 가지 패키지가 있고, 기존에 쓰시는
                    서비스와 연계하면{"\n"}
                    {"        "}업무 자동화 쪽에서 효과를 많이 보실 수 있을 것 같습니다.
                    대략적인 가격대는{"\n"}
                    {"        "}지금 쓰시는 수준에서 15% 정도 추가되는 구조입니다.{"\n"}
                    고객: 음… 기능은 좋아 보이는데 내부에서 예산이랑 필요성을 같이 봐야
                    할 것 같네요.{"\n"}
                    홍길동: 네, 이해했습니다. 그러면 제가 제안서랑 데모 자료를 정리해서
                    메일로 먼저 보내드릴게요.{"\n"}
                    고객: 네, 자료 주시면 팀에서 검토해 보고 다시 말씀드리겠습니다.{"\n"}
                    홍길동: 알겠습니다. 그럼 검토 후에 다음 주쯤 다시 한번 연락
                    드리겠습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

