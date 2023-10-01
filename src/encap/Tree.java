package encap;

public class Tree {
      private String red;
    private String white;
	private String blue;
	private String green;
	
	public String getA() {
		return red;
	}
		public String getb() {
			return white;
		}
			public String getC() {
				return blue;
			}
				public String getD() {
					return green;
					
	}
				public void setA(String newA) {
					this.red=newA;	
				System.out.println(this.red);
}
				public void setB(String newB) {
					this.white=newB;
					System.out.println(this.white);
				}
				public void setC(String newC) {
					this.blue=newC;	
					System.out.println(this.blue);
				}
				public void setD(String newD) {
					this.green=newD;
					System.out.println(this.green);
				}
}