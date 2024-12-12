import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';

const GlobalFooter = memo(() => {
  return (
    <DarkModeContainer className="h-full flex-center">
      Copyright MIT © 2021 Soybean
    </DarkModeContainer>
  );
});

export default GlobalFooter;
