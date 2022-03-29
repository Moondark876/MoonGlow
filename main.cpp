#include <iostream>
#include <vector>
#include <pair>

template <typename Key, typename Value>
class Lookup {
  public:
    using value_type = std::pair<Key, Value>;
    using container_type = std::vector<value_type>;
  private:
    container_type _container;
  public:
    using iterator = typename container_type::const_iterator;
    using const_iterator = iterator; 
//     brb niggers
}
