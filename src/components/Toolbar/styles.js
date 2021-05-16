import styled from 'styled-components';

export const ToolbarDiv = styled.div`
  .navbar-dark .navbar-nav .nav-link {
    color: black;
    font-size: 1.2rem;
    transition: 0.2s;
    font-weight: 600;
  }
  .nav-link {
    width: 100px;
    text-align: center;
    line-height: 48px;
  }
  #cast {
    width: 160px;
  }

  .navbar-dark .navbar-nav .nav-link:hover {
    background-color: black;
    color: var(--redStaysic);
  }
  @media (max-width: 576px) {
    .nav-link {
      width: 100%;
      text-align: left;
      padding-left: 10px;
      font-weight: bold;
    }
    .navbar {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
  }
`;
