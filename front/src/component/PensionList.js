import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import PensionMap from '../component/PensionMap';
import MapImg from '../img/지도.png';
import '../css/PensionList.css';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import PenPickLogo from '../img/펜픽로고.png';
import Calendar from '../img/달력.png';
import UserImg from '../img/사용자.png';
import SearchButton from '../img/돋보기.png';
import CartImg from '../img/장바구니.png';
import { useLocation } from 'react-router-dom';

function PensionList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult2, setSearchResult2] = useState([]);
  const location = useLocation();
  const inputValue = location.state?.searchTerm || '';
  const urlParams = new URLSearchParams(window.location.search);
  const selectedRegion = urlParams.get('region');

  const [filter,setFilter] = useState([]);


  //렌더링 되자마자 지역이름 setSearch에 저장!!!!
  useEffect(() => {
    setSearchTerm(selectedRegion);
  }, [selectedRegion]); 

//렌더링 되자마자 검색값 setSearch에 저장!!!!
  useEffect(()=>{
    if(inputValue!==null&&selectedRegion===null){
      setSearchTerm(inputValue);
    }
  
  },[searchTerm])




  //searchTerm 널 값 아니면서 지역이름이 null값일떄!!! 자동으로 검색 메서드 실행
  useEffect(() => {
    if (searchTerm !== '') {
      handleSearch();
    }else{
      console.log('검색값이 없습니다.')
    }
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/penpick/searchAll`,
        {
          params: {
            term: searchTerm,
          },
        }
      );
      console.log(response.data);

      const responseData = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setSearchResult2(responseData);
    } catch (error) {
      console.error('Error searching users:', error);
      setSearchResult2([]);
    }
  };

  const handleSearch2 = async (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div id='AllContain'>
      <div id='HeaderBannerImg'>
        <div id='PensionListCenterBox'>
          <nav id='HeaderNav' class='navbar navbar-expand-lg '>
            <div class='container-fluid'>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  <a
                    class='nav-link active'
                    aria-current='page'
                    id='HeaderQnALink'
                    href='/QnA'
                  >
                    고객센터
                  </a>
                  <a
                    class='nav-link active'
                    aria-current='page'
                    id='HeaderEventLink'
                    href='/EventPage'
                  >
                    이벤트
                  </a>
                  <li class='nav-item'>
                    <a
                      id='HeaderCartImg'
                      class='nav-link active'
                      aria-current='page'
                      href='/CartList'
                    >
                      장바구니
                    </a>
                  </li>

                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='/'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img id='HeaderUserImg' src={UserImg} alt='사용자' />
                    </a>
                    <ul class='dropdown-menu' id='HeaderDropdownBox'>
                      <li>
                        <a
                          id='HeaderDropDownLink'
                          class='dropdown-item'
                          href='/'
                        >
                          로그인/회원가입
                        </a>
                      </li>
                      <li>
                        <a
                          id='HeaderDropDownLink'
                          class='dropdown-item'
                          href='#'
                        >
                          비회원 예약조회
                        </a>
                      </li>
                      <li>
                        <a
                          class='dropdown-item'
                          id='HeaderDropDownLinkMYPAGE'
                          href='/Mypage'
                        >
                          마이페이지
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* 메인페이지 카테고리 */}
          <div id='HeaderBannerLink'>
            <a href='/' id='HeaderMainLink'>
              <img id='HeaderPenPickImg' src={PenPickLogo} alt='펜픽로고'></img>
            </a>
            <form id='PensionSearchForm'>
              <input
                id='PensionInput'
                type='text'
                placeholder='펜션을 입력하세요'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* <span id='InputBar'>|</span>
              <img src={Calendar} id='Calendar' alt='Calendar' />
              <input id='PensionInput' type='text' />
              <span id='InputBar'>|</span>
              <img id='UserImg' src={UserImg} alt='사용자' />
              <input id='PensionInputNumber' type='text' /> */}
              <button
                id='PensionSearchButton'
                type='submit'
                onClick={handleSearch2}
              >
                <img id='PensionSearchImg' src={SearchButton} alt='돋보기' />
              </button>
            </form>
          </div>
        </div>
        <hr id='PensionListHr'></hr>
      </div>

      <div id='container' className='row'>
        <div id='firstBox' className='col-md-4'>
          <h3>{searchTerm} 검색 결과 </h3>
          <a href='PesionMap'>
            <img src={MapImg} alt='지도' id='MapImg'></img>
          </a>
          <div id='filter'>
            <h6 id='filterTitle'>필터</h6>
            <form>
              <div id='asdfasdf'>
                <input id='filterCheckbox' type='checkbox' />
                <span id='filterException'>매진 숙소 제외</span>
              </div>

              <hr id='hrfilter' />
              <span id='filterTitle'>가격</span>
              <span id='filterdescription'>1박 기준</span>

              <input type='range' id='filterRange' />
              <hr id='hrfilter' />
              <div>
                <h6 id='filterTitle'>공용시설</h6>
                <button id='filterButton' >수영장</button>
                <button id='filterButton'>바베큐장</button>
                <button id='filterButton'>공용샤워실</button>
                <br />
                <button id='filterButton'> 노래방</button>
                <button id='filterButton'>운동시설</button>
                <button id='filterButton'>세미나룸</button>
                <br />
                <button id='filterButton'>사우나</button>
                <button id='filterButton'>캠프파이어</button>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-8' id='PensionSearchList'>
          <ul>
            {searchResult2.map((pension) => (
              <div id='pensionBox' className='row' key={pension.id}>
                <span id='pensionSearchImg' className='col-md-4'>
                  이미지
                </span>
                <div id='pensionDescription' className='col-md-8'>
                  <p id='pensionName'>{pension.name}</p>
                  <p>{pension.address}</p>
                  {pension.check_in} - {pension.check_out}
                </div>
                <hr id='PensionSearchListhr' />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default PensionList;
