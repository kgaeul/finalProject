import '../css/PensionMainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PenPickLogo from '../img/PenPickLogo.png';
import EventImg from '../img/EventImg1.jpg';
import FormImg from '../img/파란집.png';
import React, { useState, useEffect } from 'react';
import CartImg from '../img/장바구니.png';
import Pagination from 'react-js-pagination';
import Header from '../component/Header';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import pensionImg1 from '../img/JS애견풀빌라_2_공공3유형.jpg';
import pensionImg2 from '../img/꽃지화이트펜션_2_공공3유형.jpg';
import pensionImg3 from '../img/이른아침호숫가펜션_3_공공3유형.jpg';
import pensionImg4 from '../img/이른아침호숫가펜션_5_공공3유형.jpg';
import axios from 'axios';

function PensionMainPage() {
  const [name, SetName] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = async () => {
    window.location.href = '/search/' + name;
  };

  return (
    <div>
      <Header />
      <div id='BannerImg1'>
        {/* 메인 문구 */}
        <div id='MainTitleBox'>
          <h1 id='MainTitle'>
            예약부터 픽업까지
            <br />
            펜픽으로 모두해결
          </h1>
        </div>

        {/* 펜션 검색창 감싼 박스 */}
        <div id='SearchForm'>
          <div id='form_Img_Title'>
            <img id='formImg' src={FormImg} alt='파란집' />
            <span id='formTitle'>펜션</span>
          </div>
          {/* 펜션 검색창 */}
          <form className='row'>
            <div id='SearchFormBar'></div>
            {/* 지역입력칸 */}
            <input
              id='input1'
              className='form-control col-md-3'
              placeholder='펜션을 입력하세요'
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
            {/* 날짜 검색창 */}
            {/* <input
              id='input3'
              className='form-control col-md-3'
              type='date'
              placeholder='날짜'
            /> */}
            {/* 인원입력칸 */}
            {/* <input
              id='input2'
              className='form-control col-md-3'
              placeholder='인원 입력하세요'
            /> */}

            {/* 펜션 검색버튼 */}
            <button
              id='SearchButton'
              className='btn  col-md-3'
              onClick={() => {
                onSubmit();
              }}
            >
              검색
            </button>
          </form>
        </div>
      </div>
      {/* 이벤트 배너 */}
      <div id='Event'>
        <h5 id='EventTitle'>이벤트</h5>
        <a id='EventLink' href='/EventPage'>
          <div id='EventImgBox'>
            <img id='EventImg' src={EventImg} alt='이벤트이미지' />
            <img id='EventImg' src={EventImg} alt='이벤트이미지' />
            <img id='EventImg' src={EventImg} alt='이벤트이미지' />
          </div>
        </a>
      </div>
      <a href='search'>펜션 목록</a>

      <div id='PopularPensionList'>
        <span id='PopularPensionTitle'>인기펜션 </span>
        <span id='description'>최근 한달 간 이용내역 기준</span>
        <br />
        <div id='LinkImgBox'>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg1} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg2} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg3} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg4} alt='pensionImg'></img>
          </a>
        </div>
      </div>

      <div id='PopularLocation'>
        <span id='PopularLocationTitle'>인기지역 </span>
        <span id='description'>최근 한달 간 이용내역 기준</span>
        <br />
        <div id='LinkImgBox'>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg1} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg2} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg3} alt='pensionImg'></img>
          </a>
          <a href='PensionDetailLink'>
            <img id='pensionImg' src={pensionImg4} alt='pensionImg'></img>
          </a>
        </div>
      </div>

      <div id='LocationList'>
        <h5> 전체지역</h5>
        <div className='row'>
          <a className='col-md-2' id='location' href='PensionDetailLink'>
            경기도
          </a>
          <a className='col-md-2' id='location' href='PensionDetailLink'>
            인천광역시
          </a>
          <a className='col-md-2' id='location' href='PensionDetailLink'>
            강원특별자치도
          </a>
          <a className='col-md-2' id='location' href='PensionDetailLink'>
            충청북도
          </a>
          <a className='col-md-2' id='location' href='PensionDetailLink'>
            충청남도
          </a>
        </div>
        <div className='row'>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            대전광역시
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            전라북도
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            전라남도
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            광주광역시
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            경상북도
          </a>
        </div>
        <div className='row'>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            경상남도
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            대구광역시
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            울산광역시
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            부산광역시
          </a>
          <a className='col-md-3' id='location' href='PensionDetailLink'>
            제주특별자치도
          </a>
        </div>
      </div>
    </div>
  );
}
export default PensionMainPage;