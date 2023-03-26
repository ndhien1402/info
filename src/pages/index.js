import {
  Container,
  Box,
  Center,
  Avatar,
  Heading,
  Flex,
  useToast,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Fancybox from '../componets/Fancybox/Fancybox';
import { TiTick } from 'react-icons/ti';

const HomePage = () => {
  const toast = useToast();
  return (
    <Box>
      <Container p={0}>
        <Box
          mt={20}
          p={3}
          pb={5}
          w={'100%'}
          shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          borderRadius={'8px'}
        >
          <Center>
            <Fancybox>
              <Avatar
                mt={2}
                name="Hien"
                src="/nguyendinhhien.png"
                size={'2xl'}
                shadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                data-fancybox={`gallery`}
                data-src="/nguyendinhhien.png"
                cursor={'pointer'}
                position="relative"
              >
                <div className="border-spin">
                  <style jsx>
                    {`
                      .border-spin {
                        border: 2px dashed #00dcff;
                        border-radius: 50%;
                        width: 133px;
                        height: 133px;
                        animation: spin 20s linear infinite;
                        position: absolute;
                        top: -2.5px;
                        left: -2px;
                      }

                      @keyframes spin {
                        0% {
                          transform: rotate(0deg);
                        }
                        100% {
                          transform: rotate(360deg);
                        }
                      }
                    `}
                  </style>
                </div>
              </Avatar>
            </Fancybox>
          </Center>
          <Center alignItems={'flex-end'}>
            <Heading size="lg" mt={4}>
              Nguyễn Đình Hiến
            </Heading>
            <span
              style={{
                backgroundColor: '#43d7f7',
                borderRadius: '50%',
                margin: '0 0 5px 5px',
              }}
            >
              <TiTick color="white" />
            </span>
          </Center>
          <Center>
            <Text pr={1}>Làm việc tại</Text>
            <Link href={'https://codetot.vn/'} target="_blank">
              <Text color="#1876f1">codetot.vn</Text>
            </Link>
          </Center>
          <div style={{ textAlign: 'center' }}>
            <span>Đến từ </span>
            <a
              href="https://goo.gl/maps/dWYD56Wp2byKZ1Tk6"
              target={'_blank'}
              style={{ color: '#1876f1' }}
            >
              Hải Dương
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span>Tốt nghiệp </span>
            <a
              href="https://hubt.edu.vn/"
              target={'_blank'}
              style={{ color: '#1876f1' }}
            >
              trường Đại học Kinh doanh và Công nghệ Hà nội
            </a>
          </div>
          <Center>
            <Flex gap="10" mt={5}>
              <Link
                href={'https://www.facebook.com/ndhien1402'}
                target="_blank"
              >
                <Image
                  src="/facebook-logo.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href={'https://www.facebook.com/ndhien1402'}
                target="_blank"
              >
                <Image
                  src="/tiktok-logo.png"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href={'https://www.facebook.com/ndhien1402'}
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: `Tính năng đang phát triển`,
                    position: 'top',
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              >
                <Image
                  src="/youtobe-logo.jpg"
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </Flex>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
